import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <p>loading...</p>
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }


   
};

PrivateRoute.propTypes = {
    children:PropTypes.node
};

export default PrivateRoute;