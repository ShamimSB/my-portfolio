// import React from 'react';

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = () => {

  const projectData = [
    {
      id: 1,
      title: "Interactive Rating Component",
      description: "A clean and interactive rating component that allows users to select a rating score and view a dynamic thank-you state upon submission",
      image: `${import.meta.env.BASE_URL}rating.png`,
      technologies: ["JavaScript, CSS3 and HTML5"],
      liveLink: "https://shamimsb.github.io/Interactive-rating-component/",
      githubLink: "https://github.com/ShamimSB/Interactive-rating-component"
    },
    {
      id: 2,
      title: "Calculator App",
      description: "A responsive calculator application built with JavaScript to perform essential arithmetic operations with a clean and modern user interface",
      image: `${import.meta.env.BASE_URL}calculator.png`,
      technologies: ["JavaScript, CSS3 and HTML5"],
      liveLink: "https://shamimsb.github.io/Calculator-app-Frontend-Mentor/",
      githubLink: "https://github.com/ShamimSB/Calculator-app-Frontend-Mentor"
    },
    {
      id: 3,
      title: "To-Do List Application",
      description: "A feature-packed productivity application for managing daily tasks with local storage persistence and smooth state management",
      image: `${import.meta.env.BASE_URL}To-Do.png`,
      technologies: ["JavaScript, CSS3 and HTML5"],
      liveLink: "https://shamimsb.github.io/To-Do-App/",
      githubLink: "https://github.com/ShamimSB/To-Do-App"
    },
    {
      id: 4,
      title: "Advice Generator App",
      description: "A dynamic application built with JavaScript that fetches random pieces of advice from an external API with a clean UI and smooth interactions",
      image: `${import.meta.env.BASE_URL}advice.png`,
      technologies: ["JavaScript, CSS3 and HTML5"],
      liveLink: "https://shamimsb.github.io/Advice-Generator-App/",
      githubLink: "https://github.com/ShamimSB/Advice-Generator-App"
    },
  ]

  return (
    <div className="min-h-[86vh] bg-slate-800 text-white flex flex-col pt-16 px-8 pb-12">
      <div className="max-w-6xl mx-auto w-full space-y-10">

        {/* Header */}
        <div className="text-center md:text-left space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            My featured <span className="text-amber-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl">
            Here are some of the web development projects I have built, showcasing my skills in frontend development, interactive logic, and user interface design.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer">
          {projectData.map((project) => (
            <div key={project.id} className="bg-slate-900 border border-slate-700/60 rounded-2xl overflow-hidden shadow-xl hover:border-amber-400/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
              
              {/* Image */}
              <div className="h-48 overflow-hidden bg-slate-950">
                <img src={project.image} alt={project.title} className="w-full h-full object-contain p-2 hover:scale-105 transition-all duration-500" />
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-slate-800 text-amber-400 border border-amber-400/20 text-xs px-3 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live project link and github link */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300">
                    <FaExternalLinkAlt /> Live Demo
                  </a>

                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>  
      </div>
    </div>
  )
}

export default Project;