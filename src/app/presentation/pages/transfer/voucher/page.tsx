import React from 'react';
import { useParams } from 'react-router-dom';
import { CustomNavHeader } from '../../../components';

export default function VoucherPage() {
    const { voucher } = useParams<string>();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <CustomNavHeader />
            {/* Iconos de flechas */}
            <div className="flex space-x-8 mb-6">
                <div className="text-green-500 text-6xl">⬅️</div>
                <div className="text-red-500 text-6xl">➡️</div>
            </div>

            {/* Monto */}
            <h1 className="text-4xl font-semibold mb-4">S/. 20,000</h1>

            {/* Información del destinatario */}
            <p className="text-lg mb-4">To</p>
            <div className="flex flex-col items-center">
                <img
                    src="https://via.placeholder.com/80"
                    alt="Alan Brito"
                    className="w-20 h-20 rounded-full mb-2"
                />
                <h2 className="text-xl font-semibold">Alan Brito</h2>
                <p className="text-sm text-gray-500">19:49 - 05 NOV 2024</p>
                <p className="text-sm text-gray-500">{voucher} • GT BANK</p>
            </div>
        </div>
    );
}
