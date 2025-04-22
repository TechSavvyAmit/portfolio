import React, { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "../assets/css/tomorrow.css";
import Meteors from "./ui/meteors";
import PortfolioPage from "./PortfolioPage";
import SparklesText from "./ui/sparkles-text";
import { FlipWords } from "./ui/flip-words";
import { motion, useInView, useAnimation } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// Enhanced AnimatedGrid Component with 3D perspective
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu perspective-1000">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] opacity-20">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="relative h-full w-full border-r border-blue-500/10"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  transition: {
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  },
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-[repeat(40,1fr)] opacity-20">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="relative w-full h-full border-b border-blue-500/10"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  transition: {
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  },
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Full-Stack Developer & Problem Solver",
    "JavaScript Enthusiast & MERN Stack Expert",
    "Creator of FitHub & Chess Master 🚀",
    "Passionate About DSA & Algorithm Design 🤓",
    "Object-Oriented Programming Advocate",
    "Frontend Aficionado with React & Tailwind",
    "Backend Developer Skilled in Node.js & Express",
  ];

  const [code] = useState(`
class Profile {
public:
    /* Personal Information */
    std::string name = "Amit";
    std::string role = "Full-Stack Developer";
    
    /* Technical Skills */
    std::vector<std::string> skills = {
        "React", "Next.js", "Node.js", "TypeScript",
        "MongoDB", "Express.js", "Python", "DSA", "C++", "JavaScript"
    };

    /* Experience Structure */
    struct Experience {
        std::string company;
        std::string position;
        std::string duration;
    };

    /* Professional Experience */
    std::vector<Experience> experiences = {
        {
            "AIDEOA", 
            "Full Stack Developer (Remote)", 
            "Oct 2024 - April 2025"
        },
        {
            "Edunet Foundation", 
            "AI Intern", 
            "Dec 2024 - Jan 2025"
        },
        {
            "Zeetron Networks", 
            "Web Trainee", 
            "Jan 2023 - Jun 2023"
        }
    };

    /* Personal Attributes */
    bool hardWorker = true;
    bool quickLearner = true;
    int internships = experiences.size();
    
    /* Eligibility */
    bool isHireable() const {
        return hardWorker && quickLearner && !experiences.empty();
    }
};
`);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <>
      <main className="pt-20 lg:pt-[0rem] bg-[#0f1629] text-white min-h-screen overflow-hidden">
        <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 z-0"></div>

          {/* Enhanced Animated Grid Background */}
          <AnimatedGrid />

          {/* Enhanced Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <Meteors number={20} />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full bg-blue-400/20"
                style={{
                  width: `${Math.random() * 5 + 2}px`,
                  height: `${Math.random() * 5 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, (Math.random() - 0.5) * 100],
                  x: [0, (Math.random() - 0.5) * 100],
                  opacity: [0.2, 0.8, 0.2],
                  transition: {
                    duration: 5 + Math.random() * 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              />
            ))}
          </div>

          {/* Main content container */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={mainControls}
            variants={containerVariants}
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-12 lg:py-0"
          >
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
              {/* Decorative blurs */}
              <motion.div
                className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              {/* Welcome badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-xs sm:text-sm font-medium">
                  Welcome to my universe
                </span>
              </motion.div>

              {/* Name section */}
              <motion.div
                variants={itemVariants}
                className="relative mb-6 sm:mb-8"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <SparklesText text="Hello" />
                  <span className="relative inline-block">
                    I'm
                    <TypeAnimation
                      sequence={[
                        " Amit",
                        1000,
                        " a Developer",
                        1000,
                        " a Problem Solver",
                        1000,
                        " a Tech Enthusiast",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      className="gradient-text ml-2"
                      repeat={Infinity}
                    />
                  </span>
                </h1>
                <motion.div
                  className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Role badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px -5px rgba(59, 130, 246, 0.5)",
                }}
              >
                <motion.i
                  className="fas fa-rocket text-blue-400 text-sm sm:text-base"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                />
                <span>
                  <FlipWords
                    className={"text-lg sm:text-xl text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </motion.div>

              {/* Animated Description */}
              <motion.div
                variants={itemVariants}
                className="relative mb-8 sm:mb-12 max-w-xl group"
              >
                <p className="text-base sm:text-xl leading-relaxed font-medium">
                  <motion.span
                    className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block mr-2"
                    >
                      👨‍💻
                    </motion.span>
                    Electronics Engineer turned{" "}
                    <span className="font-bold underline decoration-emerald-400">
                      Full Stack Developer
                    </span>{" "}
                    with a deep love for code
                  </motion.span>
                  <br />
                  <motion.span
                    className="inline-block bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mt-2"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  >
                    <motion.span
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="inline-block mr-2"
                    >
                      🔧
                    </motion.span>
                    Built projects like{" "}
                    <span className="font-bold text-amber-300">HackFusion</span>
                    ,{" "}
                    <span className="font-bold text-amber-300">
                      Sorting Visualizer
                    </span>{" "}
                    , <span className="font-bold text-amber-300">FitHUb</span> ,{" "}
                    <span className="font-bold text-amber-300">
                      Chess Master
                    </span>{" "}
                    &{" "}
                    <span className="font-bold text-amber-300">
                      Shopping Trend Analyzer
                    </span>
                  </motion.span>
                  <br />
                  <motion.span
                    className="inline-block bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent mt-2"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="inline-block mr-2"
                    >
                      📚
                    </motion.span>
                    <span className="font-bold">DSA lover</span> with 500+
                    problems solved | Fluent in{" "}
                    <span className="text-cyan-300">C++, JS, Python</span> |{" "}
                    <span className="text-fuchsia-400">
                      Frontend + Backend wizard
                    </span>
                  </motion.span>
                  <br />
                  <motion.span
                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mt-2"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="inline-block mr-2"
                    >
                      🌍
                    </motion.span>
                    Interned at{" "}
                    <span className="font-bold text-green-300">AIDEOA</span> &{" "}
                    <span className="font-bold text-green-300">Zeetron</span> |
                    Constantly growing through real-world projects
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xl inline-block"
                    >
                      ✨
                    </motion.span>
                  </motion.span>
                  <motion.span
                    className="inline-block bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mt-2"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  >
                    <motion.span
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="inline-block mr-2"
                    >
                      🛠️
                    </motion.span>
                    Collaborated on{" "}
                    <span className="font-bold text-amber-300">Hackfusion</span>{" "}
                    — a complete{" "}
                    <span className="underline decoration-yellow-400">
                      SEO-optimized IT solution
                    </span>{" "}
                    built with{" "}
                    <span className="font-bold">React, Next.js & Node.js</span>.
                    Boosted organic traffic by{" "}
                    <span className="font-bold text-yellow-400">40%</span> and
                    automated{" "}
                    <span className="font-bold">40% of user queries</span> via
                    chatbot.
                  </motion.span>
                </p>

                {/* Animated underline effect */}
                <motion.div
                  className="absolute bottom-[-20px] left-0 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 w-0 shadow-md shadow-purple-400"
                  initial={{ width: 0, opacity: 0, x: -50 }}
                  whileInView={{ width: "100%", opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                {/* View Projects Button */}
                <motion.a
                  href="https://github.com/TechSavvyAmit"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(96, 165, 250, 0)",
                      "0 0 20px -5px rgba(96, 165, 250, 0.7)",
                      "0 0 0 0 rgba(96, 165, 250, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      <span>Learn More</span>
                      <motion.i
                        className="fas fa-arrow-right"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      />
                    </span>
                  </span>
                </motion.a>

                {/* Contact Button */}
                <motion.a
                  href="https://drive.google.com/file/d/1dS3EXzjZWR0AgV1EZvpbzqPVd7sZgvge/view?usp=sharing"
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px -3px rgba(156, 163, 175, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                      <span>Get Resume</span>
                      <motion.i
                        className="fas fa-envelope"
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "mirror",
                        }}
                      />
                    </span>
                  </span>
                </motion.a>
              </motion.div>

              {/* Follow Me Section */}
              <motion.div
                variants={itemVariants}
                className="mt-8 text-center"
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4 },
                }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-2xl font-semibold text-gray-300 mb-4"
                  whileInView={{
                    textShadow: "0 0 10px rgba(255,255,255,0.3)",
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Follow Me
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/TechSavvyAmit"
                    className="group flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg shadow"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 15px -3px rgba(255,255,255,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.i
                      className="fab fa-github text-white"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <span className="text-gray-300 font-medium group-hover:text-white">
                      GitHub
                    </span>
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href="https://www.linkedin.com/in/techsavvyamit/"
                    className="group flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg shadow"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 15px -3px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.i
                      className="fab fa-linkedin text-white"
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <span className="text-gray-300 font-medium group-hover:text-white">
                      LinkedIn
                    </span>
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href="https://www.instagram.com/amiiithe_amit/"
                    className="group flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-lg shadow"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 15px -3px rgba(236, 72, 153, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.i
                      className="fab fa-instagram text-white"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />
                    <span className="text-gray-300 font-medium group-hover:text-white">
                      Instagram
                    </span>
                  </motion.a>

                  {/* Twitter */}
                  <motion.a
                    href="https://x.com/Tech_Savvy_Amit"
                    className="group flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg shadow"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 15px -3px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.i
                      className="fab fa-twitter text-white"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    />
                    <span className="text-gray-300 font-medium group-hover:text-white">
                      Twitter
                    </span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="hidden lg:block absolute left-[5.5rem] top-[2.3rem]"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                  <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;UI
                  Magic
                </div>
              </motion.div>
              <motion.div
                className="hidden lg:block absolute right-10 top-20"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                  <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
                </div>
              </motion.div>
              <motion.div
                className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                  <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
                </div>
              </motion.div>
            </div>

            {/* Right column - Code window */}
            <motion.div
              variants={itemVariants}
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <div className="gradient-border hover:gradient-border-animate">
                <motion.div
                  className="code-window bg-[#091121]"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <div className="window-header">
                    <div className="window-dot bg-red-500"></div>
                    <div className="window-dot bg-yellow-500"></div>
                    <div className="window-dot bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <motion.i
                        className="fas fa-code"
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                        }}
                      />
                      developer.cpp
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>
        <PortfolioPage />
      </main>
    </>
  );
}
