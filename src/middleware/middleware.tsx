import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

interface MiddlewareRouteProps {
    children: React.ReactNode;
}

const TOKEN_EXPIRE_TIME = 3 * 60 * 1000;

export const ProtectedRoutes = ({ children }: MiddlewareRouteProps): JSX.Element => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }

    return <>{children} </>;
}

export const RedirectAuth = ({ children }: MiddlewareRouteProps): JSX.Element => {
    const token = localStorage.getItem("token");

    if (token) {
        return <Navigate to="/home" replace={true} />;
    }

    return <>{children}</>;
}

export const RemoveToken = ({ children }: MiddlewareRouteProps) => {
    useEffect(() => {
        const checkTokenExpire = () => {

            const token = localStorage.getItem('token');
            const storedTime = localStorage.getItem('tokenTime');

            if (token && storedTime) {
                const currentTime = Date.now();

                if (currentTime - parseInt(storedTime, 10) > TOKEN_EXPIRE_TIME) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('tokenTime');
                }
            }
        }

        const intervalId = setInterval(checkTokenExpire, 1000);
        return () => clearInterval(intervalId)
    });

    return <>{children}</>;
}