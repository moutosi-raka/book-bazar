import { useEffect, useState } from "react"

const useTakeUser = ()=>{
    const [users, setUsers] = useState('');
    useEffect( ()=>{
        fetch('http://localhost:5000/all-user-info')
        .then(res=> res.json())
        .then(data => setUsers(data))
    },[])
return [users];
}

export default useTakeUser;