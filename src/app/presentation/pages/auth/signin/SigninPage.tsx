import { useState } from "react";
import { CustomButton, CustomInput } from "../../../components";
import axiosIn from "../../../../api/axiosInstance";
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { ApiIpPublic } from "../../../../utils/auth/ApiIpPublic";

export default function SigninComponent() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const apiIpPublic = new ApiIpPublic();

    const handleLoginClick = async () => {
        const date = new Date().toISOString().split('.')[0] + 'Z';

        try {
            const ipPulic = await apiIpPublic.get();
            const response = await axiosIn.post('/auth/login', {
                dni: username,
                password,
                ip_log: ipPulic.data['ip'],
                dateInp: date
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 201) {
                localStorage.setItem("token", response.data["token"]);
                localStorage.setItem('tokenTime', Date.now().toString());
                window.location.href = "/home";
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-center mb-6">Iniciar Sesion</h1>

            <div className="mb-4">
                <label className="flex items-center border-b border-gray-300 py-2">
                    <FaUser className="mr-2 text-gray-400" />
                    <CustomInput
                        placeholder="DNI"
                        value={username}
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
            </div>

            <div className="mb-4">
                <label className="flex items-center border-b border-gray-300 py-2">
                    <FaLock className="mr-2 text-gray-400" />
                    <CustomInput
                        placeholder="password"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>

            <div className="text-center mb-4">
                <Link to="/signup">
                    <span className="text-sm text-gray-500 hover:text-gray-700">No tiene cuenta?</span>
                </Link>
            </div>

            <CustomButton
                textButton="Ingresar"
                onClick={handleLoginClick}
            />
        </>
    );
}
