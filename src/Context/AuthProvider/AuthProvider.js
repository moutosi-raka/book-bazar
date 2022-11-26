import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
    const createUser = (email, password)=>
    {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password)=>
    {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
         console.log('user observing')
         setUser(currentUser);
        }) 
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        createUser,
        user,
        login
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;