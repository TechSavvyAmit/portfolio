import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Award,
  Calendar,
  GraduationCap,
  BookOpen,
  School,
} from "lucide-react";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Arqam Academy Sr. Sec. School",
      mascot: "📘",
      achievements: [
        "Scored 76% in CBSE Board Exams",
        "Specialized in Science Stream",
        "Active participant in science fairs",
      ],
      duration: "2016 - 2017",
      icon: School,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Rattan Convent School",
      mascot: "📗",
      achievements: [
        "Achieved 78% in CBSE Board Exams",
        "Specialized in Physics, Chemistry, Maths",
        "Won inter-school quiz competitions",
      ],
      duration: "2018 - 2019",
      icon: BookOpen,
    },
    {
      degree: "Bachelor of Technology (ECE)",
      school: "National Institute of Technology, Kurukshetra",
      mascot: "🎓",
      achievements: [
        "CGPA: 7.68/10",
        "Specialized in Electronics & Communication",
        "Coursework in AI/ML, Computer Networks",
        "Active in technical clubs and hackathons",
      ],
      duration: "2020 - 2024",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="min-h-screen bg-[#0f1629] py-20 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
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
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            whileHover={{ scale: 1.1 }}
          >
            <GraduationCap className="w-10 h-10 text-blue-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Academic Journey
            </h2>
          </motion.div>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            "Building foundations for technological excellence through dedicated
            learning"
          </motion.p>
        </motion.div>

        {/* Education timeline */}
        <div className="space-y-8 relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-teal-500/50 to-purple-500/20 z-0"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative z-10"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Year marker */}
              <motion.div
                className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg -translate-x-1/2"
                whileHover={{ scale: 1.1 }}
              >
                {edu.duration.split(" ")[0]}
              </motion.div>

              {/* Education card */}
              <motion.div
                className={`ml-24 relative group rounded-xl transition-all duration-500 overflow-hidden ${
                  hoveredIndex === index ? "shadow-xl" : "shadow-lg"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -5 }}
              >
                {/* Gradient border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r rounded-xl ${
                    hoveredIndex === index
                      ? "from-blue-500 via-teal-500 to-purple-500 opacity-30"
                      : "from-blue-500/10 via-teal-500/10 to-purple-500/10 opacity-20"
                  }`}
                ></div>

                {/* Card content */}
                <div className="relative bg-[#0f1629] p-8">
                  {/* Degree title */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                      whileHover={{ rotate: 15 }}
                    >
                      <edu.icon className="w-6 h-6 text-teal-400" />
                    </motion.div>
                    <div>
                      <motion.h3
                        className="text-xl font-bold text-white"
                        whileHover={{ x: 5 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <motion.p
                        className="text-teal-400 flex items-center gap-2 mt-1"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Star className="w-4 h-4" />
                        {edu.school}
                      </motion.p>
                    </div>
                  </div>

                  {/* Duration */}
                  <motion.div
                    className="flex items-center gap-2 text-gray-400 text-sm mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((item, i) => (
                        <motion.li
                          key={i}
                          className="text-gray-300 text-sm flex items-start gap-2"
                          initial={{ x: -20 }}
                          whileInView={{ x: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <span className="text-teal-400 mt-1">▹</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
