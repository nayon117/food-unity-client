import PropTypes from 'prop-types';
import { createContext} from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    // const [user,setUser] = useState(null)
    // const [loading, setLoading] = useState(true);


    const authInfo = {
        // user,
        // loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;