import { useState } from "react";

const useAuth = () => {
    const [token, setToken] = useState();
    const AUTH_API = 'https://api.themoviedb.org/3/authentication';
    const AuthenticateUser = async () => {
        try{
            const response = await fetch(AUTH_API,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({username:'sachin.sengar06@gmail.com',password:'12345'})
    
            });
            const data = await response.json();
            setToken(data);
            console.log("authenticated successfully")
        }
        catch(error){
            console.error('Authentication failed',error);
        }
    }
    return{AuthenticateUser,token}
}
export default useAuth;