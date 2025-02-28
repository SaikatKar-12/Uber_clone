import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { setCaptain, setIsLoading, setError } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const fetchCaptainData = async (token) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/captain_isAuthenticated`, {
        headers: {
          'x-access-token':token
        }
      });

      if (response.status === 200) {
        setCaptain(response.data.data);
        navigate('/captain-home'); // Redirect to captain's home page
      }
    } catch (error) {
      console.error("Error fetching captain data:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/captain_signin`, { email, password });

      if (response.status === 200) {
        const token = response.data.data;
        localStorage.setItem('token',token);
        let token1=localStorage.getItem('token');
        fetchCaptainData(token); // Fetch and store captain data
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Driver Icon" />
        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder='password'
          />
          <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>
            Login
          </button>
        </form>
        <p className='text-center'>
          Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link>
        </p>
      </div>
      <div>
        <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
