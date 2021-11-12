import React from 'react'
import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const User = () =>{
    const history = useHistory();
    const fetchUser =async () =>{
        try{

                
            const res = await fetch('http://localhost:3002/user/about',{
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                    
                },
                credentials:"include"
            });

            const data = await res.json();
            if(!res.status ===200){
                const error = new Error(res.error);
                throw error;
            }

        }catch(err){
            console.log(err);
            history.push('/login')
        }

    }

    useEffect(()=>{

        fetchUser();

},[])
    return (
        <div>

            <h1>HELLO</h1>

        </div>
    )
}

export default User;