import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

export default function UserDashboard() {
   const {user}=useAuth();
   
    if(!user){
        Navigate('/login');
    }

  return (
    <div className='bg-gray-100 flex flex-col  justify-between items-center w-full'>
       <p className='italic underline text-lg text-green-500'>User Dashboard</p>
       <p className='text-lg'>role: <span className='text-red-700'>{user.role}</span></p>
       <h1 className='text-xl font-bold'>Welcome back ! {user.name}</h1>
       
    </div>
  )
}
