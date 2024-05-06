import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Router, Routes, useNavigate, Navigate} from 'react-router-dom';
import Homepage from './pages/HomePage/Homepage.js';
import Newsify from './pages/Newsify/Newsify.js';
function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route index element = {<Homepage />} />
      <Route path = "/newsify" element = {< Newsify/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
