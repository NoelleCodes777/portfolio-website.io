import React from 'react';
import EducationCert from './pages/EducationCert';
import Navbar from './pages/Navbar';
import Home from "./pages/components/Home/Home";
import { Routes, Route, Navigate } from 'react-router-dom';
import Skills from "./pages/Skills";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div >
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education_and_certifications/my-background" element={<EducationCert />} />
            <Route path="/tech/skill" element={<Skills />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;