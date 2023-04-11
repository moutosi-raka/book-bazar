import { useEffect, useState } from "react"

const useToken = email =>{
    const [token, setToken] = useState('');

    useEffect( ()=>{
      if(email){
        fetch(`https://book-bazar-server-moutosi-raka.vercel.app/api/jwt/list?email=${email}`)
        .then(res => res.json())
        .then(data =>{
            if(data.accessToken)
            {
                localStorage.setItem('accessToken', data.accessToken);
                setToken(data.accessToken)
               
            }
        })
      }
    },[email])
    return [token];
} 

export default useToken;