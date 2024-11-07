import { useState } from "react";
import { CustomButton, CustomInput } from "../../../components";
import axiosIn from "../../../../api/axiosInstance";
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function SigninPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginClick = async () => {
    try {
      const response = await axiosIn.post('/auth/login', {
        dni: username, password
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
    <div className="w-full h-screen flex items-center justify-center bg-gray-700">
      <div className="bg-white w-80 p-8 rounded-lg shadow-md">
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
      </div>
    </div>
  );
}
