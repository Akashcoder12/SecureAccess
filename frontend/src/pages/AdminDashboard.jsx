import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminDashboard() {
  const {user}=useAuth();
  const [users,setUsers]=useState([]);


    if(!user){
       Navigate('/login'); 
    }

   const fetchUsers=async ()=>{
     try{
      const res=await axios.get("https://secureaccess-h9nd.onrender.com/api/users",{
        headers:{
           Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      })
      setUsers(res.data);
     }
     catch(err){
       console.error("Failed to fetch users",err);
     }
   }
   
   useEffect(()=>{
      if(user?.role==='admin'){
        fetchUsers()
      }
   },[user]);

   const deleteUser=async(id)=>{
      try{
        await axios.delete(`http://localhost:3001/api/users/${id}`,{
          headers:{
             Authorization:`Bearer ${localStorage.getItem("token")}`
          }
        })

        setUsers(prev=>prev.filter(u=>u._id!==id))
      }
      catch(err){
         console.error("Failed to delete user",err);
      }
   }



  return (
    <div className='bg-gray-100 flex flex-col  justify-between items-center w-full'>
       <p className='italic underline text-lg text-green-500'>Admin Dashboard</p>
       <p className='text-lg '>Role : <span className='text-red-700'>{user.role}</span></p>
       <h1 className='text-xl font-bold '>Welcome back ! {user.name}</h1>

       <div className='bg-white p-4 rounded shadow'>
         <h2 className='text-xl font-semibold mb-4'>Users Management</h2>
          {
            users.length===0 ? (
              <p>No users found.</p>
            ) : (
              <table className='w-full table-auto'>
                <thead>
                  <tr className='bg-gray-200'>
                    <th className='p-2'>Name</th>
                    <th className='p-2'>Email</th>
                    <th className='p-2'>Role</th>
                    <th className='p-2'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map(u=>(
                      <tr key={u._id} className='text-center border-b'>
                        <td className='p-2'>{u.name}</td>
                        <td className='p-2'>{u.email}</td>
                        <td className='p-2 capitalize'>{u.role}</td>
                        <td className='p-2'>
                          <button onClick={()=>{deleteUser(u._id)}}
                           className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm'
                           disabled={u._id===user._id}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )
          }
       </div>
    </div>
  )
}
