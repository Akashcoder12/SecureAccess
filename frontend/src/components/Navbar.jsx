import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

export default function Navbar() {
   const {user,setUser}=useAuth();

   const logout=()=>{
       localStorage.removeItem("token");
       setUser(null);
   }

  return (
    <nav className='p-4 bg-gray-800 text-white flex  justify-between'>
      <Link to="/">Home</Link>
      <div className='flex gap-4'>
        {
          !user? (
             <>
               <Link to="/login">Login</Link>
               <Link to="register">Register</Link>
             </>
          ) : (
            <>
              <Link to={user.role==="admin" ? "/admin":"/user"}>
                {user.role === "admin" ? "Admin Dashboard" : "User Dashboard"}
              </Link>
              <button onClick={logout}>
                Logout
              </button>
            </>
          ) 
        }
      </div>
    </nav>
  )
}
