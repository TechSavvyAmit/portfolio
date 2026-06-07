import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  School,
} from "lucide-react";

const EducationSection = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (ECE)",
      institute: "National Institute of Technology, Kurukshetra",
      duration: "2021 - 2025",
      score: "CGPA: 7.68 / 10",
      icon: GraduationCap,
      highlights: [
        "Data Structures & Algorithms",
        "Computer Networks",
        "Operating Systems",
        "Artificial Intelligence & Machine Learning",
      ],
    },

    {
      degree: "Higher Secondary Education (CBSE)",
      institute: "Rattan Convent School",
      duration: "2018 - 2020",
      score: "78%",
      icon: BookOpen,
      highlights: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Academic Excellence",
      ],
    },

    {
      degree: "Secondary Education (CBSE)",
      institute: "Arqam Academy Sr. Sec. School",
      duration: "2016 - 2018",
      score: "76%",
      icon: School,
      highlights: [
        "Science Stream",
        "Strong Academic Foundation",
        "Leadership & Team Activities",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-[#020617] relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span
            className="
              px-4 py-2
              rounded-full
              border border-cyan-500/20
              bg-cyan-500/5
              text-cyan-400
              text-sm
              font-medium
            "
          >
            Education
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Academic Background
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto">
            Focused on core engineering principles, advanced algorithmic problem-solving, and full-stack software development through rigorous coursework and practical project execution
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  bg-slate-900/70
                  backdrop-blur-xl
                  border
                  border-slate-800
                  rounded-3xl
                  p-8
                  hover:border-cyan-500/40
                  transition-all
                  duration-300
                "
              >
                {/* Icon */}

                <div
                  className="
                    w-16 h-16
                    rounded-2xl
                    bg-cyan-500/10
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-cyan-500/20
                    transition-all
                  "
                >
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>

                {/* Degree */}

                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  {edu.degree}
                </h3>

                {/* Institute */}

                <p className="text-cyan-400 font-medium mb-4">
                  {edu.institute}
                </p>

                {/* Duration & Score */}

                <div className="flex justify-between items-center text-sm text-slate-400 border-b border-slate-800 pb-4 mb-6">
                  <span>{edu.duration}</span>
                  <span>{edu.score}</span>
                </div>

                {/* Highlights */}

                <div className="space-y-4">
                  {edu.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="
                        flex
                        items-start
                        gap-3
                        text-slate-300
                        text-sm
                      "
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Achievement Strip */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="
            mt-20
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
          "
        >
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-cyan-400">7.68</h3>
            <p className="text-slate-400 mt-2">CGPA</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-cyan-400">500+</h3>
            <p className="text-slate-400 mt-2">DSA Problems</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-cyan-400">22+</h3>
            <p className="text-slate-400 mt-2">Projects</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-cyan-400">4</h3>
            <p className="text-slate-400 mt-2">Professional Experiences</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;