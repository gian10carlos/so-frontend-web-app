import { Navigate } from 'react-router-dom';

interface MiddlewareRouteProps {
    children: React.ReactNode;
}

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
