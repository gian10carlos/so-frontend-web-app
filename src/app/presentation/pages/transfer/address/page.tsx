import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomNavHeader } from '../../../components';

export default function AddressPage() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const accounts = ['61198009', '61157413', '62013456', '61123478'];

    const filteredAccounts = accounts.filter((account) =>
        account.includes(search)
    );

    const handleCardClick = (account: string) => {
        navigate(`/transfer/${account}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <CustomNavHeader />

            {/* Main Content */}
            <div className="mt-20 max-w-md w-full bg-white rounded-xl shadow-md p-6">
                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Buscar cuenta"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full text-center text-2xl font-semibold border border-gray-300 rounded-md p-4 focus:outline-none focus:border-gray-400"
                />

                {/* Filtered Accounts */}
                <div className="mt-6 space-y-4">
                    {filteredAccounts.map((account, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(account)} // Navega al hacer clic
                            className="w-full bg-gray-800 text-white text-center py-4 rounded-lg text-lg font-semibold cursor-pointer hover:bg-gray-700"
                        >
                            {account}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
