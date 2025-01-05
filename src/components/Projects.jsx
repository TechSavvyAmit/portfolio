import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import olova from "../assets/images/olova.png";
import projectImage1 from "../assets/images/FitHub.png"; // Example for other projects
import projectImage2 from "../assets/images/Chess_Master.png"; // Example for other projects
import projectImage3 from "../assets/images/Sorting_algo_visual.png"; // Example for other projects
import projectImage5 from "../assets/images/Simon_game.png"; // Example for other projects
import projectImage4 from "../assets/images/XrFitSync.png"; // Example for other projects
import projectImage6 from "../assets/images/Drum-Kit.png"; // Example for other projects
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock Data for Multiple Projects
const projectsData = [
  {
    title: "FitHub",
    description:
      "FitHub is a fitness tracking app that integrates with various devices to monitor health and progress, featuring personalized workout plans and real-time feedback.",
    tags: ["React", "Fitness", "Web App"],
    links: {
      github: "https://github.com/TechSavvyAmit/FitHub",
    },
    image: projectImage1,
    featured: false,
  },
  {
    title: "Chess Master",
    description:
      "Chess Master is an interactive chess game built with JavaScript and WebSockets, offering multiplayer functionality and AI-powered opponents.",
    tags: ["JavaScript", "Game Development", "Multiplayer"],
    links: {
      github: "https://github.com/TechSavvyAmit/chess_master",
      demo: "https://chess-master-68m8.onrender.com/",
    },
    image: projectImage2,
    featured: false,
  },
  {
    title: "Sorting Algorithm Visualizer",
    description:
      "This project visualizes various sorting algorithms in action, helping users understand how different algorithms work step by step.",
    tags: ["JavaScript", "Algorithms", "Visualization"],
    links: {
      github: "https://github.com/TechSavvyAmit/Sorting_Algo_Visualizer",
      demo: "https://sorting-algo-visualizer-dun.vercel.app/",
    },
    image: projectImage3,
    featured: false,
  },
  {
    title: "XrFitSync",
    description:
      "XrFitSync is a fitness app that helps users track workouts, meals, and health metrics through a sleek, user-friendly interface.",
    tags: ["React", "Fitness", "Web App"],
    links: {
      github: "https://github.com/TechSavvyAmit/XrFitSync",
      demo: "https://xrfitsync.pages.dev/",
    },
    image: projectImage4,
    featured: false,
  },
  {
    title: "Simon Game",
    description:
      "Simon Game is a memory game that challenges players to recall increasingly complex sequences of colors and sounds.",
    tags: ["JavaScript", "Game", "Memory Challenge"],
    links: {
      github: "https://github.com/TechSavvyAmit/Simon-game",
      demo: "https://simon-game-byxp.vercel.app/",
    },
    image: projectImage5,
    featured: false,
  },

  {
    title: "Drum Kit",
    description:
      "Drum Kit is an interactive web application where users can tap on various drums to play beats. It's designed to be a fun and educational tool for learning rhythm.",
    tags: ["JavaScript", "Interactive", "Music"],
    links: {
      github: "https://github.com/TechSavvyAmit/Drum-Kit",
      demo: "https://techsavvyamit.github.io/Drum-Kit/",
    },
    image: projectImage6,
    featured: false,
  },
];

// Limit to 6 projects
const maxProjects = 6;

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, maxProjects);

  return (
    <div className="pt-40 min-h-screen bg-[#0f1629] p-8 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-emerald-400 mb-8">
          PORTFOLIO HIGHLIGHTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
            >
              {/* Image Section */}
              <div className="w-full h-64 md:h-auto overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Section */}
              <Card className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6 mt-4">
                <MacOsButtons />

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                        {project.featured ? "Featured Project" : "Project"}
                      </div>
                      <CardTitle className="text-slate-100 text-2xl font-bold">
                        {project.title}
                      </CardTitle>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.links.github}
                        className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={22} />
                      </a>
                      <a
                        href={project.links.demo}
                        className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={22} />
                      </a>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="mt-4">
                  <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {projectsData.length > maxProjects && !showAllProjects && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllProjects(true)}
              className="px-6 py-3 text-white bg-teal-500 hover:bg-teal-600 rounded-lg transition-all duration-300"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectShowcase;
