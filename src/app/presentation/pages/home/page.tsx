import React, { useEffect, useState, useCallback } from 'react';
import CustomNavHeader from '../../components/customNavHeader';
import axiosIn from '../../../api/axiosInstance';
import { jwtDecode } from 'jwt-decode';
import { CustomButtonCircle, CustomCard } from '../../components';
import { DecodedToken, Transfer } from './interface';

export default function HomePage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [transfers, setTransfers] = useState<Transfer[]>([]);
  const [userName, setUserName] = useState<string>('');
  const [userBalance, setUserBalance] = useState<number>(0);

  const extractUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: DecodedToken = jwtDecode(token);
        if (decodedToken.id) {
          setUserId(decodedToken.id);
        }
      } catch (error) {
        console.error('Error decoding token', error);
      }
    }
  };

  const getListTransfers = useCallback(async () => {
    if (userId) {
      try {
        const response = await axiosIn.get('/transfer/' + userId);

        if (response.data.people) {
          setUserName(response.data.people.first_name || '');
          setUserBalance(response.data.people.person_balances.amount || 0);
        }

        let transfersArray: Transfer[] = [];

        if (response.data && typeof response.data === 'object' && !Array.isArray(response.data)) {
          transfersArray = Object.values(response.data).filter((item: any) => item && item.id) as Transfer[];
        } else {
          transfersArray = response.data.transfers || [];
        }

        setTransfers(transfersArray);
      } catch (error) {
        console.error('Error fetching transfers:', error);
        setTransfers([]);
      }
    }
  }, [userId]);

  useEffect(() => {
    extractUserIdFromToken();
  }, []);

  useEffect(() => {
    if (userId) {
      getListTransfers();
    }
  }, [userId, getListTransfers]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <CustomNavHeader />

      <div className="mt-20 w-full bg-white rounded-xl shadow-md overflow-hidden mb-20">
        <div className="p-4 flex items-center space-x-4">
          <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="text-lg font-semibold">Hola, {userName} 👋</h2>
          </div>
        </div>

        <div className="p-6 bg-gray-800 text-white rounded-lg text-center mt-4">
          <div className="text-sm">Perfil balance</div>
          <div className="text-3xl font-bold">s/. {userBalance}</div>
          <div className="text-xs text-gray-400 mt-1">Perfil: {userId}</div>
        </div>

        <div className="flex justify-around mt-6">
          <CustomButtonCircle icon={'🚀'} text={'Transferir'} />
          <CustomButtonCircle icon={'⬆️'} text={'Subir'} />
          <CustomButtonCircle icon={'📄'} text={'Pagar'} />
          <CustomButtonCircle icon={'🛍️'} text={'Comprar'} />
        </div>

        <div className="mt-6 px-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Transacciones recientes</h3>
          </div>
          <div className="mt-4 max-h-64 overflow-y-auto px-6">
            {transfers.length > 0 ? (
              transfers.map((transfer) => (
                <CustomCard
                  key={transfer.id}
                  name={
                    transfer.id_send.toString() === userId ? `Transferencia a ${transfer.id_received}` : `Transferencia de ${transfer.id_send}`
                  }
                  datetime={new Date(transfer.date).toLocaleString()}
                  amount={transfer.amount.toString()}
                  nameClassName={transfer.id_send.toString() === userId ? 'text-red-500' : ''}
                />
              ))
            ) : (
              <p>No se encontraron transacciones recientes.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
