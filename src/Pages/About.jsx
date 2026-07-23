// import React from 'react';

import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const About = () => {

const skills = [
  {name: "HTML5", level: "Advanced", color: "text-orange-500", icon: <FaHtml5 className="text-3xl"/>},
  {name: "CSS3", level: "Advanced", color: "text-blue-500", icon: <FaCss3Alt className="text-3xl"/>},
  {name: "JavaScript (ES6)", level: "Intermediate", color: "text-yellow-400", icon: <FaJsSquare className="text-3xl"/>},
  {name: "Tailwind CSS", level: "Learning", color: "text-sky-400", icon: <SiTailwindcss className="text-3xl"/>},
  {name: "React", level: "Learning", color: "text-cyan-400",icon: <FaReact className="text-3xl"/>}
];

  return (
    <div className="bg-slate-800 min-h-[86vh] text-white flex pt-36 p-8">
      <div className="max-w-4xl mx-auto w-full space-y-12">
 {/* Introduction */}
        <div className="text-center md:text-left space-y-4">
           <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">About <span className="text-amber-400">Me</span></h2> 

           <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl">
            I am a passionate Frontend web Developer and student of Conputer Science & Technology. I love turning conplex problems into beautiful, responsive and user-friendly web applications. My focus is always on writing clean, efficient code and  creating seamless user experiences.
           </p>
        </div>
  {/* Educations */}
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 shadow-xl">
          <h3 className="text-xl font-bold text-amber-400 mb-4">Education Background</h3>
          <div className="border-l-2 border-amber-500 pl-2 space-y-2">
            <h4 className="text-lg font-semibold text-slate-200">Diploma in Computer Science and Technology (CST)</h4>
            <p className="text-sm text-amber-500 font-medium">Narsingdi Polytechnic Institute</p>
          </div>
        </div>

   {/* Skills */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-200 text-center md:text-left">My <span className="text-amber-400">Tech Stack</span></h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill,index)=>(
              <div key={index} className="bg-slate-900 border border-slate-700/60 p-4 rounded-xl text-center shadow-md hover:border-amber-400/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-center items-center cursor-pointer">

                <div className={`${skill.color}`}>
                  {skill.icon}
                </div>

                <div className={`font-bold text-lg ${skill.color}`}>
                  {skill.name}
                </div>
                <div className="text-xs text-slate-500 mt-1 items-center">
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
          <Link to={"/contact"} className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">Hire Me</Link>
        </div>


      </div>

    </div>
  )
}

export default About;