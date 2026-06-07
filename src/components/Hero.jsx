import React, { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "../assets/css/tomorrow.css";
import Meteors from "./ui/meteors";
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
class Amit {
public:
    /* Identity */
    std::string name = "Amit";
    std::string role = "Software Engineer";
    std::string location = "Bangalore, India";

    /* Core Tech Stack */
    std::vector<std::string> techStack = {
        "Java",
        "Spring Boot",
        "React",
        "Next.js",
        "Node.js",
        "AWS",
        "Docker",
        "MongoDB",
        "SQL",
        "Microservices"
    };

    /* Engineering Principles */
    std::vector<std::string> strengths = {
        "System Design",
        "Low Level Design",
        "SOLID Principles",
        "Design Patterns",
        "REST APIs",
        "Scalable Architecture",
        "Problem Solving"
    };

    /* Professional Journey */
    struct Experience {
        std::string company;
        std::string role;
        std::string duration;
    };

    std::vector<Experience> experience = {
        {
            "Raja Software Labs",
            "Software Engineer",
            "May 2025 - Present"
        },
        {
            "AIDEOA",
            "Full Stack Developer Intern",
            "Oct 2024 - Apr 2025"
        }
    };

    /* Featured Projects */
    std::vector<std::string> projects = {
        "Coupon System Engine",
        "CloudStack Deploy",
        "GrowixTech",
        "Microservices Applications",
        "ExpenseFlow",
    };

    /* Production Impact */
    int dailyRequestsHandled = 1000;
    int bugsReduced = 25;
    int testingEffortReduced = 30;

    /* Developer Traits */
    bool lovesBackend = true;
    bool cloudNative = true;
    bool aiCurious = true;
    bool continuousLearner = true;

    /* Mission */
    std::string currentFocus =
        "Building scalable backend systems, cloud-native applications, "
        "and production-ready software.";

    bool availableForChallenges() const {
        return true;
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
            <Meteors number={12} />
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
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 py-16"
          >
            {/* LEFT SIDE */}
            <div className="w-full lg:w-[43%]">

              {/* Status Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/5"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm text-slate-300">
                  Open to Full Stack & Software Engineer Roles
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95]"
              >
                Hi, I'm
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Amit
                </span>
              </motion.h1>

              {/* Role */}
              <motion.div
                variants={itemVariants}
                className="mt-6 text-2xl lg:text-3xl font-semibold text-cyan-400"
              >
                <FlipWords words={words} />
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl"
              >
                Software Engineer with 1.5+ years of experience building scalable
                backend systems, full-stack web applications, and cloud-native
                solutions. Experienced in Java, Spring Boot, React, AWS, Docker,
                Microservices, and System Design, with a strong focus on performance,
                maintainability, and delivering production-ready software.

                <br />
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 mt-8 max-w-2xl"
              >
                <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-cyan-400">
                    400+
                  </h3>
                  <p className="text-sm text-slate-400">
                    DSA Problems
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-cyan-400">
                    25+
                  </h3>
                  <p className="text-sm text-slate-400">
                    Projects
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-cyan-400">
                    3
                  </h3>
                  <p className="text-sm text-slate-400">
                    Internships
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 mt-10"
              >
                <a
                  href="https://github.com/TechSavvyAmit"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </a>

                <a
                  href="https://drive.google.com/file/d/1dS3EXzjZWR0AgV1EZvpbzqPVd7sZgvge/view"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-xl border border-slate-700 hover:border-cyan-500 text-white transition-all duration-300 hover:scale-105"
                >
                  Download Resume
                </a>
              </motion.div>

            </div>

            {/* RIGHT SIDE */}
            <motion.div
              variants={itemVariants}
              className="w-full lg:w-[57%]"
            >
              <div className="rounded-3xl overflow-hidden border border-slate-800 bg-[#0f172a] shadow-2xl">

                {/* Window Header */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-800">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>

                  <span className="ml-4 text-sm text-slate-400">
                    developer.cpp
                  </span>
                </div>

                {/* Code Block */}
                <pre className="p-6 text-sm overflow-y-auto max-h-[700px]">
                  <code className="language-cpp">
                    {code}
                  </code>
                </pre>

              </div>
            </motion.div>

          </motion.div>
        </section>
      </main>
    </>
  );
}
