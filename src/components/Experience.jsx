import React from "react";
import { motion } from "framer-motion";
import { Rocket, BrainCircuit, Cpu, Stars, Sparkles } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  achievements,
  index,
}) => {
  const colors = ["#3b82f6", "#10b981", "#8b5cf6"]; // Blue, Emerald, Purple

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl p-0.5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 opacity-70 rounded-2xl"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      />

      {/* Card content */}
      <div className="relative bg-gray-900 rounded-[15px] p-6 h-full">
        {/* Floating particles */}
        <motion.div
          className="absolute top-4 right-4"
          animate={{
            y: [0, -5, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="text-yellow-400" size={20} />
        </motion.div>

        <div className="flex items-start gap-4 mb-4">
          <motion.div
            className="p-3 rounded-full"
            style={{ backgroundColor: `${colors[index]}20` }}
            whileHover={{ scale: 1.1 }}
          >
            {index === 0 && <Rocket className={colors[index]} size={24} />}
            {index === 1 && (
              <BrainCircuit className={colors[index]} size={24} />
            )}
            {index === 2 && <Cpu className={colors[index]} size={24} />}
          </motion.div>

          <div>
            <motion.h3
              className="text-xl font-bold text-white"
              whileHover={{ x: 5 }}
            >
              {title}
            </motion.h3>
            <motion.div
              className="flex gap-3 text-gray-400 mt-1"
              whileHover={{ scale: 1.02 }}
            >
              <span>{company}</span>
              <span>•</span>
              <span>{period}</span>
            </motion.div>
          </div>
        </div>

        <motion.p
          className="text-gray-300 mb-4 pl-2 border-l-2"
          style={{ borderColor: colors[index] }}
          whileHover={{ paddingLeft: "1rem" }}
        >
          {description}
        </motion.p>

        {achievements && (
          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.h4
              className="text-sm font-semibold mb-2 flex items-center gap-2"
              style={{ color: colors[index] }}
              whileHover={{ scale: 1.02 }}
            >
              <Stars size={16} />
              Key Achievements:
            </motion.h4>
            <ul className="space-y-2">
              {achievements.map((item, i) => (
                <motion.li
                  key={i}
                  className="text-gray-400 text-sm flex items-start gap-2"
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <span className="text-yellow-400 mt-1">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "AIDEOA (Remote)",
      period: "Oct 2024 - Present",
      description:
        "Crafting cutting-edge web applications with React, Node.js, and MongoDB that push the boundaries of user experience.",
      achievements: [
        "Engineered bulk export feature saving 15+ hours weekly",
        "Integrated PayU processing 500+ transactions monthly",
        "Boosted engagement 25% with interactive UI components",
        "Automated emails reducing manual work by 30 hours/month",
      ],
    },
    {
      title: "AI Engineer",
      company: "Edunet Foundation",
      period: "Dec 2024 - Jan 2025",
      description:
        "Developed intelligent systems using machine learning to analyze and predict consumer behavior patterns.",
      achievements: [
        "Built shopping trend predictor with 92% accuracy",
        "Trained custom NLP models for text classification",
        "Optimized algorithms reducing processing time by 40%",
        "Presented findings to industry expert panel",
      ],
    },
    {
      title: "Web Developer",
      company: "Zeetron Networks",
      period: "Jan 2023 - Jun 2023",
      description:
        "Transformed design concepts into high-performance websites with pixel-perfect responsiveness.",
      achievements: [
        "Developed 5+ landing pages with 98% mobile compatibility",
        "Slashed load times by 40% through optimization",
        "Increased organic traffic by 35% with SEO enhancements",
        "Implemented CI/CD pipeline reducing deployment time",
      ],
    },
  ];

  return (
    <div className="relative bg-gray-900 py-20 px-4 overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.7,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.2, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <Stars className="text-yellow-400" size={40} />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 mb-4"
            initial={{ letterSpacing: "0px" }}
            whileInView={{ letterSpacing: "2px" }}
            transition={{ duration: 0.5 }}
          >
            Cosmic Career Journey
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            "Launching digital innovations that orbit beyond expectations"
          </motion.p>
        </motion.div>

        {/* Experience cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} index={index} {...exp} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;
