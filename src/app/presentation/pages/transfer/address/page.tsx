import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomNavHeader } from '../../../components';
import axiosIn from '../../../../api/axiosInstance';
import { getToken } from '../../../../../services/localstorage-service';
import { handleErrorSwal } from '../../../../../services/error-swal';

export default function AddressPage() {
    const [search, setSearch] = useState('');
    const [coincidence, setCoincidence] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const post = async () => {
            if (!search) return;
            try {
                const userId = await getToken();
                const response = await axiosIn.post('/people/list', {
                    dni: search,
                    id: userId
                }, { headers: { 'Content-Type': 'application/json' } });

                if (response.status === 201) {
                    setCoincidence(response.data);
                }
            } catch (error) {
                handleErrorSwal('Ups!, Intente mas tarde!');

                setTimeout(() => {
                    window.location.href = '/home';
                }, 1500);
            }
        }
        post();
    }, [search])

    const setCardClick = (receivedId: string, receivedDni: string) => {
        navigate(`/transfer/${receivedDni}`, { state: { id: receivedId, dni: receivedDni } });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <CustomNavHeader />
            <div className="mt-20 max-w-md w-full bg-white rounded-xl shadow-md p-6">
                <input
                    type="text"
                    placeholder="Buscar DNI"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full text-center text-2xl font-semibold border border-gray-300 rounded-md p-4 focus:outline-none focus:border-gray-400"
                />
                <div className="mt-6 space-y-4">
                    {coincidence.map((account, index) => (
                        <div
                            key={index}
                            onClick={() => setCardClick(account["id"], account["dni"])}
                            className="w-full bg-gray-800 text-white text-center py-4 rounded-lg text-lg font-semibold cursor-pointer hover:bg-gray-700"
                        >
                            {account["dni"]}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
