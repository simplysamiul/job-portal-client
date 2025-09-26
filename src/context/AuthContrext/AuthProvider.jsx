import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContrext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    // GOOGLE PROVIDER
    const googleProvider = new GoogleAuthProvider();
    // LOADING STATE
    const [loading, setLoading] = useState(true);
    // SET USER STATE
    const [user, setUser] = useState(null);

    // SIGN IN USING GOOGLE
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    } 

    // REGISTER USER
    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    // USER SIGN IN
    const signInUser = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    };

    // logout user

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = {
        createUser,
        signInUser,
        setLoading,
        setUser,
        logOut,
        user,
        signInWithGoogle,
        loading
    };

    // SET OBSERVER
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return() => {
            unSubscribe();
        }
    },[]);
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;