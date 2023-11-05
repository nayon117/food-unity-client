import PropTypes from 'prop-types';
import { createContext, useEffect, useState} from 'react';
import auth from '../config/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // create new user 
    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // login funtionality 
    const signIn = (email, password) => {
        setLoading(true);
        return  signInWithEmailAndPassword(auth,email,password);
    }

    // logout funtionality
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // update user profile 
    const handleUpdateProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
    }

    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        handleUpdateProfile
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