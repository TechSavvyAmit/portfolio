import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  achievements,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        backdrop-blur-xl
        p-7
        transition-all
        duration-500
        hover:border-sky-500/30
        hover:shadow-[0_20px_50px_rgba(56,189,248,0.12)]
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-gradient-to-br
          from-sky-500/5
          via-transparent
          to-emerald-500/5
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {title}
            </h3>

            <p className="text-sky-400 mt-1 font-medium">
              {company}
            </p>
          </div>

          <span
            className="
              px-3
              py-1
              rounded-full
              text-xs
              bg-sky-500/10
              border
              border-sky-500/20
              text-sky-300
            "
          >
            {period}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed mb-6">
          {description}
        </p>

        {/* Achievements */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Key Contributions
          </h4>

          <ul className="space-y-3">
            {achievements.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-slate-300"
              >
                <ArrowRight
                  size={16}
                  className="text-emerald-400 mt-1 shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "AIDEOA (Remote)",
      period: "Oct 2024 – Apr 2025",
      description:
        "Developed scalable web applications using React, Node.js, Prisma, MongoDB, PayU integration and modern UI systems.",
      achievements: [
        "Built bulk export functionality saving 15+ hours weekly",
        "Integrated PayU payment gateway handling 500+ monthly transactions",
        "Improved engagement by 25% through UI enhancements",
        "Automated email workflows reducing manual effort",
      ],
    },
    {
      title: "AI Intern",
      company: "Edunet Foundation",
      period: "Dec 2024 – Jan 2025",
      description:
        "Worked on machine learning and data analytics projects involving customer behavior prediction and trend analysis.",
      achievements: [
        "Developed Shopping Trend Analysis project",
        "Achieved 92% prediction accuracy",
        "Performed advanced EDA and feature engineering",
        "Optimized model performance and data pipelines",
      ],
    },
    {
      title: "Web Trainee",
      company: "Zeetron Networks",
      period: "Jan 2023 – Jun 2023",
      description:
        "Built responsive websites and optimized frontend performance while collaborating with development teams.",
      achievements: [
        "Developed multiple responsive landing pages",
        "Reduced load time by 40%",
        "Improved SEO and accessibility scores",
        "Worked closely with designers and developers",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-slate-800
              bg-slate-900/50
              mb-6
            "
          >
            <Briefcase
              size={16}
              className="text-sky-400"
            />
            <span className="text-slate-300 text-sm">
              Professional Experience
            </span>
          </div>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
              mb-4
            "
          >
            Experience
          </h2>

          <p
            className="
              text-slate-400
              max-w-2xl
              mx-auto
              text-lg
            "
          >
            Internships and professional experiences that
            strengthened my software engineering,
            problem-solving, and product development skills.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              {...exp}
            />
          ))}
        </div>

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
            <h3 className="text-3xl font-bold text-cyan-400">2+</h3>
            <p className="text-slate-400 mt-2">Professional Experiences</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceSection;