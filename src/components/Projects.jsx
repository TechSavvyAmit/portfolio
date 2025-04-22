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
import projectImage6 from "../assets/images/Drum-Kit.webp";

const projectsData = [
  {
    title: "Hackfusion",
    description:
      "A collaborative IT solutions hub built with a dynamic team, Hackfusion delivers SEO-optimized websites, modern UI/UX design, and full-stack development. The project boosted organic reach by 40% and automated 40% of user queries via an integrated chatbot—showcasing the power of seamless teamwork and tech innovation.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Node.js",
      "Team Project",
      "SEO",
      "Chatbot",
    ],
    links: {
      demo: "https://www.hackfusion.in/",
    },
    image: projectImage0,
    icon: <Stars className="w-5 h-5 text-yellow-400" />,
    featured: false,
  },
  {
    title: "FitHub",
    description:
      "Revolutionizing fitness tracking with cutting-edge technology, FitHub transforms your workout routine into an immersive digital experience. This powerhouse app syncs with your devices to deliver real-time health analytics and personalized training regimens that adapt to your progress.",
    tags: ["React", "Health Tech", "Performance Analytics"],
    links: {
      github: "https://github.com/TechSavvyAmit/FitHub",
    },
    image: projectImage1,
    icon: <Rocket className="w-5 h-5" />,
    featured: false,
  },
  {
    title: "Chess Master",
    description:
      "Step into the digital arena with Chess Master, where strategic brilliance meets cutting-edge technology. This immersive platform pits you against cunning AI opponents or live adversaries worldwide, complete with move analysis and interactive tutorials to sharpen your game.",
    tags: ["WebSockets", "AI Integration", "Real-time Multiplayer"],
    links: {
      github: "https://github.com/TechSavvyAmit/chess_master",
      demo: "https://chess-master-68m8.onrender.com/",
    },
    image: projectImage2,
    icon: <Gamepad2 className="w-5 h-5" />,
    featured: false,
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Unlock the hidden beauty of computer science with this mesmerizing visualization tool. Watch as complex sorting algorithms come to life in vibrant color, transforming abstract concepts into intuitive visual narratives that make learning algorithms irresistible.",
    tags: ["Data Structures", "Educational Tool", "Interactive Learning"],
    links: {
      github: "https://github.com/TechSavvyAmit/Sorting_Algo_Visualizer",
      demo: "https://sorting-algo-visualizer-dun.vercel.app/",
    },
    image: projectImage3,
    icon: <Code className="w-5 h-5" />,
    featured: false,
  },
  {
    title: "XrFitSync",
    description:
      "The future of fitness tracking is here. XrFitSync blends sleek design with powerful analytics, offering a 360° view of your health journey. Track workouts, nutrition, and biometrics through an interface so intuitive it feels like second nature.",
    tags: ["React", "Health Dashboard", "User Experience"],
    links: {
      github: "https://github.com/TechSavvyAmit/XrFitSync",
      demo: "https://xrfitsync.pages.dev/",
    },
    image: projectImage4,
    icon: <Sparkles className="w-5 h-5" />,
    featured: false,
  },
  {
    title: "Simon Memory Challenge",
    description:
      "Put your memory to the ultimate test with this electrifying revival of the classic Simon game. Progressive difficulty levels and hypnotic visuals create an addictive brain-training experience that's equal parts nostalgic and innovative.",
    tags: ["Cognitive Training", "Interactive Game", "Sound Design"],
    links: {
      github: "https://github.com/TechSavvyAmit/Simon-game",
      demo: "https://simon-game-byxp.vercel.app/",
    },
    image: projectImage5,
    icon: <Gamepad2 className="w-5 h-5" />,
    featured: false,
  },
  {
    title: "Virtual Drum Kit",
    description:
      "Turn your keyboard into a powerhouse percussion studio. This dynamic web app delivers studio-quality drum samples with responsive visual feedback, perfect for budding musicians or seasoned pros looking to jam anywhere, anytime.",
    tags: ["Web Audio API", "Music Tech", "Interactive Design"],
    links: {
      github: "https://github.com/TechSavvyAmit/Drum-Kit",
      demo: "https://techsavvyamit.github.io/Drum-Kit/",
    },
    image: projectImage6,
    icon: <Palette className="w-5 h-5" />,
    featured: false,
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg hover:shadow-2xl"
    >
      {/* Image Section */}
      <div className="w-full h-64 md:h-auto overflow-hidden rounded-lg relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-lg font-medium"
          >
            Click to explore
          </motion.div>
        </div>
      </div>

      {/* Text Section */}
      <motion.div
        className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md p-6 mt-4 w-full"
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <MacOsButtons />

        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            {project.icon}
            <div>
              <div className="text-emerald-400 text-sm font-mono mb-1 tracking-wide uppercase">
                {project.featured ? "Featured Innovation" : "Digital Creation"}
              </div>
              <h3 className="text-slate-100 text-2xl font-bold">
                {project.title}
              </h3>
            </div>
          </div>
          <div className="flex gap-4">
            <motion.a
              href={project.links.github}
              className="text-slate-400 hover:text-emerald-400"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={22} />
            </motion.a>
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                className="text-slate-400 hover:text-emerald-400"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={22} />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-slate-300 mb-6 text-lg leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 10px rgba(16, 185, 129, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectShowcase = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, 6);

  return (
    <div className="pt-40 min-h-screen bg-[#0f1629] p-8 text-slate-100 relative overflow-hidden">
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
              Digital Masterpieces
            </h2>
          </motion.div>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            "Where innovation meets execution - explore my portfolio of
            cutting-edge digital solutions"
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
