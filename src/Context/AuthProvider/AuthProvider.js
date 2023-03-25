import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import toast from 'react-hot-toast';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup} from 'firebase/auth';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const [reportProduct, setReportProduct] = useState(null);
     const [bookProduct, setBookProduct] = useState(null);

   
  
    
     const createUser = (email, password)=>
    {   
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = googleProvider =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const login = (email, password)=>
    {   
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo)=>{
        return updateProfile(auth.currentUser, userInfo)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    // const handleReport = id =>{
    //     fetch(`http://localhost:5000/category/report/${id}`,{
    //         method: 'PUT',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         if(data.modifiedCount>0){
    //             toast.success('report successfully');
    //         }
    //     })
    // }
    
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
         console.log('user observing')
         setUser(currentUser);
         setLoading(false);
        }) 
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        createUser,
        user,
        logOut,
        loading,
        reportProduct,
        setReportProduct,
        setBookProduct,
        bookProduct,
        googleSignIn,
        updateUser,
        login
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;