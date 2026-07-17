// import React from 'react';

import { useState } from "react";
import { NavLink } from "react-router-dom"

const Navbar = () => {
  
const [isOpen,setIsOpen] = useState(false);  

const activeClass = ({isActive})=>
  isActive 
    ? "text-amber-400 font-semibold md:border-b-2 md:border-amber-400 md:pb-1" 
    : "text-slate-300 hover:text-white transition-all";


  return (
   <nav className="bg-slate-900 text-slate-100 shadow-lg p-4 sticky top-0 z-50 border-b border-slate-800">

      <div className="max-w-6xl mx-auto flex justify-between items-center">
  {/*Logo Brand  */}
      <div className="text-2xl font-bold tracking-wide">
        MY<span className="text-amber-400">Portfolio</span>
      </div>

  {/* Button Togul */}
      <button onClick={()=>setIsOpen(!isOpen)} className=" md:hidden text-2xl focus:outline-none cursor-pointer">
        {isOpen ? "✕" : "☰" }
      </button>

      <ul className={`*: flex gap-6 items-center text-lg
        absolute top-full left-0 w-full bg-slate-900 p-6 flex-col shadow-xl transition-all duration-300 z-50
        md:static md:w-auto md:p-0 md:flex-row md:shadow-none
       ${isOpen ? 'flex' : 'hidden md:flex'}
      `}>
        <li>
          <NavLink to={"/"} className={activeClass}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={activeClass}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/project"} className={activeClass}>Project</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className={activeClass}>Contact</NavLink>
        </li>
      </ul>
      </div>
   </nav>
  )
}

export default Navbar;