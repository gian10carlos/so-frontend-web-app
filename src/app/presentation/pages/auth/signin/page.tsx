import { useState } from "react";
import { CustomButton, CustomInput } from "../../../components";
import axiosIn from "../../../../api/axiosInstance";


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
    <div className="w-full h-svh flex justify-center">
      <div className="w-1/3 shadow-md h-2/3">
        <h1 className="text-center text-4xl">Log In</h1>
        <p>Username:</p>
        <CustomInput value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
        <p>Password: </p>
        <CustomInput value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <CustomButton textButton="Log In" onClick={handleLoginClick} />
      </div>
    </div>
  )
}
