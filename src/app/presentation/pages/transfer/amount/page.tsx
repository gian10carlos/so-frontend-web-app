import { useNavigate, useParams } from 'react-router-dom'
import CustomNavHeader from '../../../components/customNavHeader'

export default function AmountPage() {
    const { account } = useParams<string>();
    const navigate = useNavigate();

    const setProcessTransfer = () => {
        navigationProcess("0912")
    }

    const navigationProcess = (voucher: string) => {
        navigate(`/transfer/${account}/${voucher}`);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <CustomNavHeader />

            {/* Main Content */}
            <div className="mt-20 max-w-md w-full bg-white rounded-xl shadow-md p-6">
                {/* Recipient Info */}
                <div className="bg-gray-800 text-white rounded-lg p-4 flex items-center">
                    <img src="https://via.placeholder.com/40" alt="Alan Brito" className="w-10 h-10 rounded-full mr-4" />
                    <div>
                        <h3 className="text-md font-semibold">{account}</h3>
                        <p className="text-sm text-gray-300">0126478172 • GT BANK</p>
                    </div>
                    <button className="ml-auto text-gray-300">
                        ✏️
                    </button>
                </div>

                {/* Amount */}
                <div className="text-center mt-6">
                    <h2 className="text-4xl font-bold text-gray-800">S/. 20,000</h2>
                    <p className="text-sm text-orange-500">Balance: S/. 40,430</p>
                </div>

                {/* Numeric Keypad */}
                <div className="grid grid-cols-3 gap-4 mt-8 text-xl font-semibold text-gray-800">
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((num) => (
                        <button key={num} className="p-4 bg-gray-100 rounded-lg focus:outline-none">
                            {num}
                        </button>
                    ))}
                    <div></div> {/* Empty space to align delete button */}
                    <button className="p-4 bg-gray-100 rounded-lg focus:outline-none">⌫</button>
                </div>

                <button onClick={setProcessTransfer} className="w-full mt-8 py-3 bg-gray-800 text-white rounded-lg font-semibold text-lg">
                    Procesar
                </button>
            </div>
        </div >
    )
}
