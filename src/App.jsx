// import React from 'react';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Footer from './Component/Footer';

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;