import { useLocation, useNavigate } from 'react-router-dom'
import CustomNavHeader from '../../../components/customNavHeader'
import { useState } from 'react';
import axiosIn from '../../../../api/axiosInstance';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from './interface';

export default function AmountPage() {
    const location = useLocation();
    const { id, dni } = location.state || {};
    const [amount, setAmount] = useState<string>('');
    const navigate = useNavigate();

    function digitAmount(num: string) {
        setAmount((prevAmount) => prevAmount + num);
    }

    function deleteDigit() {
        setAmount((prevAmount) => prevAmount.slice(0, -1));
    }

    const apiCreateTransfer = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('Not found token');
                navigate('/')
            } else {
                const decode = jwtDecode<DecodedToken>(token);
                const date = new Date().toISOString().split('.')[0] + "Z";

                const response = await axiosIn.post('/transfer/create', {
                    "id_send": parseInt(decode.id.toString(), 10),
                    "id_received": parseInt(id),
                    "amount": parseInt(amount),
                    "date": date
                });

                if (response.status === 201) {
                    navigationProcess()
                }
            }

        } catch (error) {
            console.log(error);
        }
    }

    const navigationProcess = () => {
        navigate(`/transfer/voucher/${dni}`, { state: { dni: dni, amount: amount } });
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <CustomNavHeader />
            <div className="mt-20 max-w-md w-full bg-white rounded-xl shadow-md p-6">
                <div className="bg-gray-800 text-white rounded-lg p-4 flex items-center">
                    <img src="https://via.placeholder.com/40" alt='' className="w-10 h-10 rounded-full mr-4" />
                    <div>
                        <h3 className="text-md font-semibold">{dni}</h3>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <h2 className="text-4xl font-bold text-gray-800">S/. {amount}</h2>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8 text-xl font-semibold text-gray-800">
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((num) => (
                        <button key={num} onClick={() => digitAmount(num)} className="p-4 bg-gray-100 rounded-lg focus:outline-none">
                            {num}
                        </button>
                    ))}
                    <div></div>
                    <button onClick={deleteDigit} className="p-4 bg-gray-100 rounded-lg focus:outline-none">⌫</button>
                </div>

                <button onClick={apiCreateTransfer} className="w-full mt-8 py-3 bg-gray-800 text-white rounded-lg font-semibold text-lg">
                    Procesar
                </button>
            </div>
        </div >
    )
}
