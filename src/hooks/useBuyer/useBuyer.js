import { useEffect, useState } from "react"

const useBuyer = email =>{
    const [isBuyer, setBuyer] = useState(false);

    useEffect( ()=>{
        if(email){
            fetch(`https://book-bazar-server-moutosi-raka.vercel.app/api/user/buyer/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBuyer(data.isBuyer)})
        }
    },[email])
    return [isBuyer]
}
export default useBuyer;