import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../services/AuthService';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    return isAuthenticated() ? children : <Navigate to="/login" state={{ from: location }} />;
};
export default PrivateRoute;
