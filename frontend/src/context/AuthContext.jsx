import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
     const [user,setUser]=useState(null);

     const fetchUser=async()=>{
         try{
            const res=await axios.get("https://secureaccess-h9nd.onrender.com/api/me",{
                headers: {Authorization : `Bearer ${localStorage.getItem("token")}`}
            });

            setUser(res.data);
         }
         catch(err){
              setUser(null);
              alert("not authorized",err);
         }
     };

    useEffect(()=>{
        fetchUser();
    },[]);

    return (
        <AuthContext.Provider value={{user,setUser,fetchUser}}>
           {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
  return useContext(AuthContext);
};


