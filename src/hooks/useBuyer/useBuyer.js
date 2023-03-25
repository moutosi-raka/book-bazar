import { useEffect, useState } from "react"

const useBuyer = email =>{
    const [isBuyer, setBuyer] = useState(false);

    useEffect( ()=>{
        if(email){
            fetch(`http://localhost:5000/api/user/buyer/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBuyer(data.isBuyer)})
        }
    },[email])
    return [isBuyer]
}
export default useBuyer;