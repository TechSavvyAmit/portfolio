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
        className={`relative overflow-hidden rounded-3xl border bg-slate-900/60 backdrop-blur-xl ${color.replace(
          "text",
          "border"
        )}/20 hover:shadow-lg group-hover-${color.replace(
          "text",
          "bg"
        )}/20 transition-all duration-500 group`}
      >
        {/* Animated border */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${color.replace(
            "text",
            "from"
          )} to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        ></div>

        <div className="relative p-8 z-10 h-full flex flex-col">
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
                key={skill}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={
                  isInView
                    ? {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }
                    : {}
                }
                transition={{
                  delay: index * 0.1 + i * 0.05,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <div
                  className="
          group/tag
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          text-slate-200
          text-sm
          font-medium
          transition-all
          duration-300
          hover:border-cyan-400/40
          hover:bg-cyan-500/10
          hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
        "
                >
                  <span className="text-cyan-400 transition-transform duration-300 group-hover/tag:rotate-12">
                    {getSkillIcon(skill)}
                  </span>

                  <span className="whitespace-nowrap">
                    {skill}
                  </span>
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
      title: "Core Programming",
      color: "text-cyan-400",
      skills: [
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "SQL",
        "C++",
      ],
    },

    {
      icon: Server,
      title: "Backend Engineering",
      color: "text-emerald-400",
      skills: [
        "Spring Boot",
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "Hibernate",
        "Microservices",
      ],
    },

    {
      icon: Layout,
      title: "Frontend Engineering",
      color: "text-blue-400",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },

    {
      icon: Database,
      title: "Databases",
      color: "text-orange-400",
      skills: [
        "MongoDB",
        "MySQL",
        "SQL Optimization",
        "Database Design",
      ],
    },

    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-amber-400",
      skills: [
        "AWS",
        "Docker",
        "CI/CD",
        "ECS",
        "ECR",
        "Fargate",
        "IAM",
        "VPC",
        "ALB",
      ],
    },

    {
      icon: Cpu,
      title: "Architecture & Design",
      color: "text-purple-400",
      skills: [
        "Low Level Design",
        "High Level Design",
        "OOP",
        "SOLID Principles",
        "Design Patterns",
        "System Design",
      ],
    },

    {
      icon: Zap,
      title: "AI & Modern Development",
      color: "text-pink-400",
      skills: [
        "Prompt Engineering",
        "LLM Fundamentals",
        "RAG Basics",
        "Agentic AI",
      ],
    },

    {
      icon: GitBranch,
      title: "Tools & Collaboration",
      color: "text-indigo-400",
      skills: [
        "Git",
        "GitHub",
        "Linux",
        "Postman",
        "VS Code",
      ],
    },
  ];

  const cloudSkills = [
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "AWS",
    "Docker",
    "Microservices",
    "MongoDB",
    "Node.js",
    "System Design",
    "REST APIs",
    "CI/CD",
    "Git",
    "Linux",
    "Prompt Engineering",
    "RAG",
    "Agentic AI",
    "TypeScript",
    "Hibernate",
    "Scalability",
  ];

  return (
    <main className="relative lg:pt-16 bg-[#0f1629] text-white min-h-screen overflow-hidden">
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

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        {/* Built-in skill cloud visualization */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Skills &
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Full Stack Developer and Software Engineer with experience building
            scalable web applications, backend systems, cloud deployments,
            AI-powered solutions, and production-grade software.
          </p>
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
            Technical Expertise
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Experienced across full-stack development, backend engineering, cloud infrastructure, system design, and AI-driven solutions.
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="h-[320px]">
              <SkillCard
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                color={category.color}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Status Cards */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {[
            {
              value: "1.5+",
              label: "Years Experience",
            },
            {
              value: "500+",
              label: "DSA Problems",
            },
            {
              value: "25+",
              label: "Projects Built",
            },
            {
              value: "2",
              label: "Industry Roles",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

              <h3 className="text-4xl font-black text-cyan-400 mb-2">
                {item.value}
              </h3>

              <p className="text-slate-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default SkillsSection;
