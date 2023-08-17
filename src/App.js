import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Frontpage from './pages/Frontpage';
// import About from './pages/About';
// import Contact from './pages/Contact';
import EducationCert from './pages/EducationCert';
// import ProjectExp from './pages/Project_exp';
// import Skills from './pages/Skills';
import Navbar from './pages/Navbar';
import Home from "./pages/components/Home/Home";
import { Outlet } from 'react-router-dom';
// import Footer from './pages/Footer';
// import Login from './pages/components/Login';
// import AdminUser from './pages/components/AdminUser';

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
