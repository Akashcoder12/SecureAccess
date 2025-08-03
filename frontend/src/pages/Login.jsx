import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { fetchUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post("https://secureaccess-h9nd.onrender.com/api/login", {
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    await fetchUser();
    alert('login successful');
    navigate("/");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-sm w-full mx-auto my-10 bg-gray-100 flex flex-col gap-4 rounded-lg shadow">
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded p-2 w-full"
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded p-2 w-full"
      />
      <button
        onClick={handleLogin}
        className="w-full rounded p-2 bg-blue-500 text-white font-bold hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
}
