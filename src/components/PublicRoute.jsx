import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute