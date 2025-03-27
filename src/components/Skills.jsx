import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Paintbrush,
  Database,
  Layout,
  Cpu,
  Cloud,
  Zap,
  GitBranch,
  CpuIcon,
  Server,
} from "lucide-react";

const SkillCard = ({ icon: Icon, title, skills, color, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div
        className={`relative overflow-hidden rounded-xl border bg-gradient-to-b from-gray-800/30 to-gray-900/50 ${color.replace(
          "text",
          "border"
        )}/20 hover:shadow-lg hover:shadow-${color.replace(
          "text",
          ""
        )}/10 transition-all duration-500 group`}
      >
        {/* Animated border */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${color.replace(
            "text",
            "from"
          )} to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        ></div>

        <div className="relative p-6 z-10">
          <div className="flex items-center gap-4 mb-5">
            <div
              className={`p-3 rounded-lg ${color.replace(
                "text",
                "bg"
              )}/10 group-hover:${color.replace(
                "text",
                "bg"
              )}/20 transition-colors`}
            >
              <Icon className={`w-6 h-6 ${color}`} />
            </div>
            <motion.h3
              className="text-xl font-semibold text-white"
              whileHover={{ x: 5 }}
            >
              {title}
            </motion.h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 * i + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div
                  className={`px-3 py-1.5 text-sm rounded-full ${color.replace(
                    "text",
                    "bg"
                  )}/10 hover:${color.replace(
                    "text",
                    "bg"
                  )}/20 text-gray-100 border ${color.replace(
                    "text",
                    "border"
                  )}/30 transition-colors flex items-center gap-1.5`}
                >
                  {getSkillIcon(skill)}
                  <span>{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Helper function to assign icons to specific skills
const getSkillIcon = (skill) => {
  const icons = {
    React: <Layout className="w-3.5 h-3.5" />,
    "Next.js": <Zap className="w-3.5 h-3.5" />,
    "Node.js": <Server className="w-3.5 h-3.5" />,
    Python: <CpuIcon className="w-3.5 h-3.5" />,
    Git: <GitBranch className="w-3.5 h-3.5" />,
    TypeScript: <Code2 className="w-3.5 h-3.5" />,
    MongoDB: <Database className="w-3.5 h-3.5" />,
  };
  return icons[skill] || <Zap className="w-3.5 h-3.5" />;
};

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Mastery",
      color: "text-blue-400",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind",
        "Redux",
      ],
    },
    {
      icon: Database,
      title: "Backend Expertise",
      color: "text-emerald-400",
      skills: [
        "Node.js",
        "Python",
        "MongoDB",
        "Express",
        "REST APIs",
        "GraphQL",
        "WebSocket",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-amber-400",
      skills: ["AWS", "Git", "Linux", "Docker", "CI/CD", "Vercel", "Firebase"],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-purple-400",
      skills: [
        "VS Code",
        "Postman",
        "Figma",
        "Jira",
        "Webpack",
        "Babel",
        "Jest",
      ],
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      color: "text-pink-400",
      skills: [
        "Framer Motion",
        "Shadcn UI",
        "Material UI",
        "CSS Animations",
        "Responsive Design",
      ],
    },
    {
      icon: Server,
      title: "System Design",
      color: "text-cyan-400",
      skills: [
        "OOP",
        "Data Structures",
        "Algorithms",
        "Microservices",
        "Web Security",
      ],
    },
  ];

  // Skills for the animated cloud
  const cloudSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "MongoDB",
    "Git",
    "Tailwind",
    "Redux",
    "Framer Motion",
    "WebSocket",
    "Firebase",
  ];

  return (
    <main className="relative pt-20 lg:pt-16 bg-[#0f1629] text-white min-h-screen overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.1, 0.8, 0],
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

      <section className="container mx-auto px-4 py-16 relative z-10">
        {/* Built-in skill cloud visualization */}
        <motion.div
          className="flex justify-center items-center mb-16 h-64 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {cloudSkills.map((skill, i) => (
              <motion.div
                key={i}
                className="absolute text-sm px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30"
                style={{
                  x: Math.cos(i * ((2 * Math.PI) / cloudSkills.length)) * 120,
                  y: Math.sin(i * ((2 * Math.PI) / cloudSkills.length)) * 120,
                }}
                animate={{
                  x: [
                    Math.cos(i * ((2 * Math.PI) / cloudSkills.length)) * 120,
                    Math.cos(i * ((2 * Math.PI) / cloudSkills.length)) * 150,
                    Math.cos(i * ((2 * Math.PI) / cloudSkills.length)) * 120,
                  ],
                  y: [
                    Math.sin(i * ((2 * Math.PI) / cloudSkills.length)) * 120,
                    Math.sin(i * ((2 * Math.PI) / cloudSkills.length)) * 150,
                    Math.sin(i * ((2 * Math.PI) / cloudSkills.length)) * 120,
                  ],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            My Skills
          </motion.div>
        </motion.div>

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            "Tools and technologies I wield to craft digital excellence"
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              index={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default SkillsSection;
