import { Link } from "react-router-dom";
import axiosIn from "../../api/axiosInstance";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "../pages/home/interface";

const setLogOut = async () => {
    const token = localStorage.getItem('token');
    const date = new Date().toISOString().split('.')[0] + 'Z';
    if (token) {
        const decoded: DecodedToken = await jwtDecode(token);
        const response = await axiosIn.patch('/auth/logout', {
            id: decoded.id_account,
            dateUtil: date,
            dateOut: date
        });
        if (response.status === 200) setCloseSession();
    }
}

function setCloseSession() {
    localStorage.removeItem("token");
    window.location.href = '/';
}

export default function CustomNavHeader() {
    return (
        <div className="w-full  bg-white rounded-b-xl shadow-md overflow-hidden fixed top-0 z-10">
            <div className="flex justify-around py-3 border-b border-gray-200">
                <Link to={'/home'}>
                    <button className="flex flex-col items-center text-purple-500">
                        <span>🏠</span>
                        <span className="text-xs">Home</span>
                    </button>
                </Link>
                <Link to={'/transfer'} >
                    <button className="flex flex-col items-center text-gray-400">
                        <span>📊</span>
                        <span className="text-xs">Transfer</span>
                    </button>
                </Link>
                <button onClick={setLogOut} className="flex flex-col items-center text-gray-400">
                    <span>👤</span>
                    <span className="text-xs">Cerrar Sesion</span>
                </button>
            </div>
        </div>
    )
}
