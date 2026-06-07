import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Rocket,
  Sparkles,
  Code,
  Palette,
  Gamepad2,
  Stars,
} from "lucide-react";
import projectImage0 from "../assets/images/hackfusion.png";
import projectImage1 from "../assets/images/Fithub.webp";
import projectImage2 from "../assets/images/Chess_Master.webp";
import projectImage3 from "../assets/images/Sorting_algo_visual.webp";
import projectImage5 from "../assets/images/Simon_game.webp";
import projectImage4 from "../assets/images/xrFitSync.webp";
import cloudstackDeployImage from "../assets/images/CloudStack_Deploy.png";
import couponSystemImage from "../assets/images/CouponSystem.png";
import expenseFlowImage from "../assets/images/ExpenseFlow.png";

const projectsData = [
  {
    title: "ExpenseFlow",
    description:
      "Splitwise-inspired expense sharing platform built using C++17, SOLID principles, and Low-Level Design. Supports multiple expense splitting strategies, debt simplification, group management, settlements, and event-driven notifications using Strategy, Factory, Observer, and Singleton patterns.",
    tags: [
      "C++",
      "LLD",
      "SOLID",
      "Design Patterns",
      "System Design"
    ],
    links: {
      github: "https://github.com/TechSavvyAmit/ExpenseFlow"
    },
    image: expenseFlowImage,
    icon: <Code size={18} />,
    featured: true
  },
  {
    title: "Coupon System",
    description:
      "Designed a scalable discount and pricing engine using OOP, SOLID principles, and Low-Level Design. Implemented Strategy and Factory patterns to support dynamic coupon rules, extensible pricing flows, and rule chaining for e-commerce platforms.",
    tags: [
      "C++",
      "OOP",
      "SOLID",
      "LLD",
      "Design Patterns"
    ],
    links: {
      github: "https://github.com/TechSavvyAmit/CouponSystem"
    },
    image: couponSystemImage,
    icon: <Code size={18} />,
    featured: true
  },
  {
    title: "CloudStack Deploy",
    description:
      "Deployed containerized applications on AWS using Docker, ECS, ECR, and Fargate. Built secure cloud infrastructure with VPC, IAM, ALB, and automated deployment workflows while resolving real-world networking and deployment challenges.",
    tags: [
      "AWS",
      "Docker",
      "ECS",
      "ECR",
      "Fargate",
      "DevOps"
    ],
    links: {
      github: "https://github.com/TechSavvyAmit/CloudStack-Deploy"
    },
    image: cloudstackDeployImage,
    icon: <Rocket size={18} />,
    featured: true
  },
  {
    title: "HackFusion",
    description:
      "SEO-focused IT solutions platform built with Next.js and Node.js. Improved organic traffic by 40% and automated customer queries through chatbot integration.",
    tags: ["Next.js", "Node.js", "SEO", "Chatbot"],
    links: {
      demo: "",
    },
    image: projectImage0,
    icon: <Stars size={18} />,
    featured: true,
  },

  {
    title: "FitHub",
    description:
      "Fitness management platform featuring workout tracking, user authentication, and performance analytics dashboards.",
    tags: ["React", "MongoDB", "Node.js"],
    links: {
      github: "https://github.com/TechSavvyAmit/FitHub",
    },
    image: projectImage1,
    icon: <Rocket size={18} />,
  },

  {
    title: "Chess Master",
    description:
      "Real-time multiplayer chess application using WebSockets with matchmaking and interactive gameplay.",
    tags: ["React", "WebSockets", "Node.js"],
    links: {
      github: "https://github.com/TechSavvyAmit/chess_master",
      demo: "https://chess-master-68m8.onrender.com/",
    },
    image: projectImage2,
    icon: <Gamepad2 size={18} />,
  },

  {
    title: "Algorithm Visualizer",
    description:
      "Interactive platform to visualize sorting algorithms through animations and real-time execution.",
    tags: ["JavaScript", "DSA", "Visualization"],
    links: {
      github: "https://github.com/TechSavvyAmit/Sorting_Algo_Visualizer",
      demo: "https://sorting-algo-visualizer-dun.vercel.app/",
    },
    image: projectImage3,
    icon: <Code size={18} />,
  },

  {
    title: "XRFitSync",
    description:
      "Modern health dashboard delivering workout insights and progress tracking through intuitive visual analytics.",
    tags: ["React", "Dashboard", "Analytics"],
    links: {
      github: "https://github.com/TechSavvyAmit/XrFitSync",
      demo: "https://xrfitsync.pages.dev/",
    },
    image: projectImage4,
    icon: <Sparkles size={18} />,
  },

  {
    title: "Simon Game",
    description:
      "Memory training game built with JavaScript featuring dynamic difficulty levels and score tracking.",
    tags: ["JavaScript", "Game", "UI"],
    links: {
      github: "https://github.com/TechSavvyAmit/Simon-game",
      demo: "https://simon-game-byxp.vercel.app/",
    },
    image: projectImage5,
    icon: <Gamepad2 size={18} />,
  },
];

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ y: -8 }}
      className="
        group
        bg-slate-900/70
        backdrop-blur-xl
        border border-slate-800
        rounded-3xl
        overflow-hidden
        hover:border-cyan-500/40
        transition-all
        duration-300
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden h-56">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

        {project.featured && (
          <div className="absolute top-4 left-4">
            <span
              className="
                px-3
                py-1
                text-xs
                font-medium
                rounded-full
                bg-cyan-500/20
                text-cyan-400
                border border-cyan-500/30
              "
            >
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="text-cyan-400">
            {project.icon}
          </div>
        </div>

        {/* Tags */}

        <div className="flex flex-wrap gap-2 mt-5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                px-3
                py-1
                text-xs
                rounded-full
                bg-slate-800
                text-slate-300
                border border-slate-700
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}

        <div className="flex items-center gap-4">
          {project.links.github && (
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              className="
                w-10
                h-10
                rounded-xl
                bg-slate-800
                flex
                items-center
                justify-center
                text-slate-300
                hover:text-cyan-400
                transition-all
              "
            >
              <Github size={18} />
            </motion.a>
          )}

          {project.links.demo && (
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              className="
                w-10
                h-10
                rounded-xl
                bg-slate-800
                flex
                items-center
                justify-center
                text-slate-300
                hover:text-cyan-400
                transition-all
              "
            >
              <ExternalLink size={18} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectShowcase = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, 6);

  return (
    <div className="pt-20 pb-20 min-h-screen bg-[#0f1629] text-slate-100 relative overflow-hidden">
      {/* Floating tech elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.2, 0.8, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="text-emerald-400 w-8 h-8" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            "Transforming complex technical challenges into scalable, real-world digital solutions"
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {projectsData.length > 6 && !showAllProjects && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => setShowAllProjects(true)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-5 h-5" />
              <span>Launch Full Portfolio</span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectShowcase;
