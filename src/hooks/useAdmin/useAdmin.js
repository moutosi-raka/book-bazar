import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin, setAdmin] = useState(false);

    useEffect( ()=>{
        if(email){
            fetch(`https://book-bazar-server-moutosi-raka.vercel.app/all-user-info/admin/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAdmin(data.isAdmin)})
        }
    },[email])
    return [isAdmin]
}
export default useAdmin;