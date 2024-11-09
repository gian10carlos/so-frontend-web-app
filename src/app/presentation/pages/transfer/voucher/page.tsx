import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { CustomLoading, CustomNavHeader } from '../../../components';

export default function VoucherPage() {
    const location = useLocation();
    const { dni, amount } = location.state || {};
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <CustomNavHeader />
            <Suspense fallback={<CustomLoading />}>
                <div className="flex space-x-8 mb-6">
                    <div className="text-green-500 text-6xl">⬅️</div>
                    <div className="text-red-500 text-6xl">➡️</div>
                </div>

                <h1 className="text-4xl font-semibold mb-4">S/. {amount}</h1>

                <div className="flex flex-col items-center">
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Alan Brito"
                        className="w-20 h-20 rounded-full mb-2"
                    />
                    <h2 className="text-xl font-semibold">{dni}</h2>
                    <p className="text-sm text-gray-500">19:49 - 05 NOV 2024</p>
                    <p className="text-sm text-gray-500">{dni} • GT BANK</p>
                </div>
            </Suspense>
        </div>
    );
}
