import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen  bg-gray-50 px-4'>
       <h1 className='text-4xl font-bold text-gray-800 mb-4'>SecureAccess</h1>
       <p className='text-lg text-gray-600 text-center max-w-xl mb-6'>
         This is a full-stack authentication system built using MongoDB,Express,React and Node.js.
         It support user registration ,login, logout ans role-based dashboards for both Admin and User.
       </p>
       
       <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/register" className='px-6 py-3 text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition'>
          Get Started.
        </Link>
       
        <Link to="/login"
         className='px-6 py-3 text-center border  border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition'
        >
           Login
         </Link>
       </div>

       <div className='mt-10 max-w-md text-sm text-gray-500 text-center'>
        <p><strong>Admin Role:</strong>Can access Admin Dashboard ,manage users, and view system data.</p>
        <p><strong>User Role:</strong>Can access the user Dashboard to manage their profile and account.</p>
       </div>

        <ul className="list-disc text-left mt-8 text-gray-700 space-y-2">
          <li>Secure login and registration with JWT</li>
          <li>Role-based access (Admin/User)</li>
          <li>Protected routes using React Context</li>
          <li>Fully responsive and deployed</li>
        </ul>
     </div>
 
  )
}
