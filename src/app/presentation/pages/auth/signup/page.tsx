import { useState } from "react";
import { CustomButton, CustomInput } from "../../../components";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import axiosIn from "../../../../api/axiosInstance";
import { ApiDniReniec } from "../../../../domian";

export default function SignupPage() {
  const [dni, setDni] = useState<string>("");
  const [identifier, setIdentifier] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [ccv, setCcv] = useState<string>("");
  const [atmPassword, setAtmPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const apiDniReniec = new ApiDniReniec();

  const getApiDni = async () => {
    try {
      await apiDniReniec.verifyDni(dni);
    } catch (error) {
      console.log('Error API RENIEC: ' + error)
    }
  }

  const handleRegisterClick = async () => {
    try {
      if (password !== confirmPassword) {
        alert('Las contraeñas no coinciden');
        return;
      }
      await getApiDni();
      const fullname = await apiDniReniec.verifyDni(dni);

      const date = new Date().toISOString().split('.')[0] + 'Z';
      const response = await axiosIn.post('/auth/register', {
        "dni": dni,
        "first_name": fullname['nombres'],
        "last_name": fullname['apellidoPaterno'] + fullname['apellidoMaterno'],
        "code_identity": identifier,
        "card_number": cardNumber,
        "ccv": ccv,
        "code_key": atmPassword,
        "password": password,
        "ip_log": "172.183.12.32",
        "dateInp": date
      });

      if (response.status === 201) {
        localStorage.setItem('token', response.data["token"]);
        localStorage.setItem('tokenTime', Date.now().toString());
        window.location.href = "/home";
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-700">
      <div className="bg-white w-1/4 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h1>

        <div className="mb-4">
          <CustomInput
            placeholder="DNI"
            value={dni}
            type="number"
            onChange={(e) => setDni(e.target.value)}
            className="w-full border border-gray-300 py-2 px-3 rounded-lg focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <CustomInput
            placeholder="Codigo identificador (MAX 1)"
            value={identifier}
            type="number"
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full border border-gray-300 py-2 px-3 rounded-lg focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <CustomInput
            placeholder="Numero tarjeta (MAX 14)"
            value={cardNumber}
            type="number"
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full border border-gray-300 py-2 px-3 rounded-lg focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <CustomInput
            placeholder="CCV (MAX 3)"
            value={ccv}
            type="number"
            onChange={(e) => setCcv(e.target.value)}
            className="w-full border border-gray-300 py-2 px-3 rounded-lg focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <CustomInput
            placeholder="Clave cajero (MAX 4)"
            value={atmPassword}
            type="password"
            onChange={(e) => setAtmPassword(e.target.value)}
            className="w-full border border-gray-300 py-2 px-3 rounded-lg focus:outline-none"
          />
        </div>

        <div className="mb-4 relative">
          <CustomInput
            placeholder="Contraseña"
            value={password}
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 py-2 px-3 rounded-lg focus:outline-none"
          />
          <div
            className="absolute right-3 top-3 cursor-pointer text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className="mb-4 relative">
          <CustomInput
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            type={showConfirmPassword ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 py-2 px-3 rounded-lg focus:outline-none"
          />
          <div
            className="absolute right-3 top-3 cursor-pointer text-gray-400"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <CustomButton
          textButton="Registrar"
          onClick={handleRegisterClick}
          classStyle="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        />

        <div className="text-center mt-4">
          <span className="text-gray-500">Tienes cuenta? </span>
          <Link to={'/'}>
            <span className="text-red-500 hover:text-red-700">Iniciar Sesion</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
