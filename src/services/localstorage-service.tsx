import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "../app/presentation/pages/home/interface";
import { handleErrorSwal } from "./error-swal";

export const getToken = async () => {
    const token = await localStorage.getItem('token');
    if (token) {
        try {
            const decodedToken: DecodedToken = jwtDecode(token);
            if (decodedToken.id) {
                return decodedToken.id;
            }
        } catch (error) {
            handleErrorSwal('Sesion Expirada!');

            setTimeout(() => {
                window.location.href = '/';
            }, 1500);

            return;
        }
    }
}