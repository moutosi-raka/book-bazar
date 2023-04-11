import {useEffect, useState } from "react";

const useUser = email =>{
    const [user, setUser] = useState({});
    const [isUserLoading, setIsUserLoading] = useState(true);
    useEffect( ()=>{
        if(email){
        fetch(`https://book-bazar-server-moutosi-raka.vercel.app/api/user/list/${email}`)
        .then(res => res.json())
        .then(data => {
            setUser(data);
            setIsUserLoading(false)})
        }
    },[email])
    return [user, isUserLoading];
}
export default useUser;