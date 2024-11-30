// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      navigate('/dashboard'); // Redirect to the lessons page
    } catch (err) {
      console.error('Login failed:', err);
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#1f2937] ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                className="text-sm rounded-lg block w-full p-2.5 placeholder:text-black"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className="text-sm rounded-lg block w-full p-2.5 placeholder:text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>
            <p className="text-sm font-medium text-white dark:text-white">
              Don't you have an account?{' '}
              <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                Sign up here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;