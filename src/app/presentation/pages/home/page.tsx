import React from 'react';
import CustomNavHeader from '../../components/customNavHeader';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      {/* Top Navigation */}
      <CustomNavHeader />

      <div className="mt-20 w-full bg-white rounded-xl shadow-md overflow-hidden mb-20">
        {/* Header */}
        <div className="p-4 flex items-center space-x-4">
          <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="text-lg font-semibold">Hola, Gian Carlos 👋</h2>
            <span className="text-sm text-gray-500">money</span>
          </div>
          <button className="ml-auto bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center">+</button>
        </div>

        {/* Balance Section */}
        <div className="p-6 bg-gray-800 text-white rounded-lg text-center mt-4">
          <div className="text-sm">Perfil balance</div>
          <div className="text-3xl font-bold">s/. 2,580,440.30</div>
          <div className="text-xs text-gray-400 mt-1">Número de perfil: 1100326447</div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-around mt-6">
          <button className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-purple-500">✈️</span>
            </div>
            <span className="text-xs mt-1">Transferir</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-purple-500">⬆️</span>
            </div>
            <span className="text-xs mt-1">Subir</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-purple-500">📄</span>
            </div>
            <span className="text-xs mt-1">Pagar</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-purple-500">🛍️</span>
            </div>
            <span className="text-xs mt-1">Comprar</span>
          </button>
        </div>

        {/* Transactions Section */}
        <div className="mt-6 px-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Transacciones recientes</h3>
            <button className="text-purple-500 text-sm">Ver Todas</button>
          </div>
          <div className="flex space-x-2 mt-4">
            <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm">All</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-400 rounded-full text-sm">Crédito</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-400 rounded-full text-sm">Débito</button>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center space-x-2">
                <img src="https://via.placeholder.com/40" alt="Alan Brito" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="text-sm font-semibold">Alan Brito</div>
                  <div className="text-xs text-gray-400">10:30pm</div>
                </div>
              </div>
              <div className="text-green-500 font-semibold">+ S/. 1,800,400</div>
            </div>
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center space-x-2">
                <img src="https://via.placeholder.com/40" alt="Mario Neta" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="text-sm font-semibold">Mario Neta</div>
                  <div className="text-xs text-gray-400">10:30pm</div>
                </div>
              </div>
              <div className="text-green-500 font-semibold">+ S/. 1,800,400</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
