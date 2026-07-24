// import React from 'react';

import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';



const Home = () => {
  return (
    <div className="bg-slate-800 min-h-[86vh] text-white flex items-center p-8">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
        
  {/* Name */}
      <div className="space-y-6 text-center md:text-left order-2 md:order-1">
        <h3 className="text-2xl text-amber-400 font-medium tracking-wide">Welcome to my Portfolio</h3>

        <h1 className="text-3xl md:text-6xl font-extrabold tracking-wide leading-none">HI, I'm <span className="text-amber-400">Shamim Bhuiyan</span> </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300">Junior Frontend Developer</h2>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">I love building responsive, user-friendly, and modern web applications using HTML5,CSS3 and JavaScript (ES6). Focused on writing clean code and creating beautiful user experiences.</p>

       <div className="flex flex-wrap gap-4 justify-center    md:justify-start pt-2">
        <Link to={"/contact"} className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">Hire Me</Link>

        <div className="flex items-center">
          <a href="https://github.com/ShamimSB"
          target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 text-2xl transition-all duration-300 transform hover:-translate-y-1">
            <FaGithub/>
          </a>
        </div>

        <div className="flex items-center">
          <a href="https://www.linkedin.com/in/shamim-bhuiyan-b2261b3b7/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 text-2xl transition-all duration-300 transform hover:-translate-y-1">
             <FaLinkedin/>
         </a>
        </div>

        <div className="flex items-center">
          <a href="mailto:bhuiyanshamim09@gmail.com" className="text-slate-400 hover:text-blue-600 text-2xl transition-all duration-300 transform hover:-translate-y-1">
            <FaEnvelope/>
          </a>
        </div>
       </div>
     </div>

   {/* Add Profile */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-slate-700 bg-slate-900 flex items-center justify-center shadow-2xl overflow-hidden">
          
            <span className="text-slate-500">
             <img src="profile.jpg" alt="profile" className="w-full h-full object-cover" />
            </span>
          </div>
        </div>       
      </div>
      </div>
  )
}

export default Home;