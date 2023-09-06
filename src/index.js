// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Skills from './pages/Skills';
import EducationCert from './pages/EducationCert';
import Footer from './pages/Footer';
import AdminUser from './pages/components/AdminUser';
import Login from './pages/components/Login';
import Home from "./pages/components/Home/Home";


import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import ProjHome from "./pages/components/ProjHome";
import Project_exp from "./pages/Project_exp";
import About from "./pages/components/Home/Home";

const root = createRoot(document.getElementById("root"));

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <App />
      }
    >
      <Route  path="/" element={ <Home />} >
    <Route  path="about_myself" element={ <About />}/>
    </Route>
    
    
      
       
          
      

      <Route
        path="/education_and_certifications/my-background"
        element={
          <>
            <EducationCert />
            <Footer />
          </>
        }
      />

      


      <Route
        path="tech/skill"
        element={
          <>
            <Skills />
            <Footer />
          </>
        }
      />


      
      <Route path="/admin/login" element={<Login />} />
      <Route path="/user-backend" element={<AdminUser />} />
      
    </Route>
  )
);

root.render(
  <RouterProvider router={routes} />
);
