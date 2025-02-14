import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Import Routes and Route
import Start from './pages/Start'; // ✅ Import your components
import UserLogin from './pages/UserLogin';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes> {/* ✅ No extra <Router> here */}
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
    </Routes>
  );
}

export default App;

