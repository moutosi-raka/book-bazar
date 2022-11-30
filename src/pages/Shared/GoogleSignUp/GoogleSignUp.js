import React, { useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useToken from '../../../hooks/useToken/useToken';



const GoogleSignUp = () => {
    const googleProvider = new GoogleAuthProvider();
    const {googleSignIn} = useContext(AuthContext);
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail)
    const navigate = useNavigate();

    const url = 'http://localhost:5000/all-user-info';
    const {data: userEmails = []} = useQuery({
        queryKey: [],
        queryFn: async()=>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    const selectEmail1 = userEmails.map(e => e.userEmail );
   
    useEffect(() => {
        if(token){    
            navigate('/')
    }
    }, [token, navigate]);

    const handleGoogleSignIn = ()=>{
        googleSignIn(googleProvider)
        .then(res => {
            const googleUser = res.user;
            const selectEmail = selectEmail1.filter(e => e=== googleUser.email);
            if(selectEmail.length === 0)
            {
                storedUserDb(googleUser.email, googleUser.displayName)
            }

        })
        .catch(e => console.error('error :', e))
    }

    const storedUserDb = (email,name)=>
    {
        const allUserInfo = {
            userEmail: email,
            userName: name,
            role : 'buyer'
        }
        fetch('http://localhost:5000/all-user-info',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allUserInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(email);
            setCreateUserEmail(email);
           
        })
    } 
    return (
        <div>
             <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Continue With Google</button>
        </div>
    );
};

export default GoogleSignUp;