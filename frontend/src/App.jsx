import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Import Routes and Route
import Start from './pages/Start'; // ✅ Import your components
import UserLogin from './pages/UserLogin';
import CaptainLogin from './pages/CaptainLogin';
import UserSignup from './pages/UserSignup';
import CaptainSignup from './pages/CaptainSignup';
import Home from './pages/Home';
import CaptainHome from './pages/CaptainHome';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes> {/* ✅ No extra <Router> here */}
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/captain-home" element={<CaptainHome />} />
      <Route path="/riding" element={<Riding />} />
      <Route path="/captain-riding" element={<CaptainRiding />} />
    </Routes>
  );
}

export default App;

