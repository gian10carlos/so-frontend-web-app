import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { CustomLoading, CustomNavHeader } from '../../../components';
import { FaArrowCircleDown, FaArrowCircleUp, FaMoneyBillAlt } from 'react-icons/fa';

export default function VoucherPage() {
    const location = useLocation();
    const { dni, amount } = location.state || {};

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
    const formattedTime = currentDate.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <CustomNavHeader />
            <Suspense fallback={<CustomLoading />}>
                <div className='w-1/4 min-w-60 text-center bg-slate-100 py-14 rounded-lg shadow-md shadow-black'>
                    <div className="flex w-full justify-center space-x-8 mb-6">
                        <FaArrowCircleUp size={70} color='red' />
                        <FaArrowCircleDown size={70} color='green' />
                    </div>

                    <h1 className="text-4xl font-semibold mb-4">S/. {amount}</h1>

                    <div className="flex flex-col items-center">
                        <FaMoneyBillAlt size={150} color='black' />
                        <h2 className="text-xl font-semibold">{dni}</h2>
                        <p className="text-sm text-gray-500">{formattedTime} - {formattedDate}</p>
                        <p className="text-sm text-gray-500">{dni} • BANCO: YAPITA</p>
                    </div>
                </div>
            </Suspense>
        </div>
    );
}
