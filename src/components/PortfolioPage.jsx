import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  const techStack = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "TypeScript",
    "TailwindCSS",
  ];
  const projects = ["FitHub", "Chess Master", "Portfolio", "E-commerce"];

  return (
    <section className="about-section bg-gradient-to-b from-[#0B1221] to-[#0F172A] text-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-teal-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 justify-center relative z-10">
        {/* Content */}
        <motion.div
          className="content max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[#4ECCA3] text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mr-2">👋</span> WHO I AM?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl leading-relaxed text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hi, I'm Amit—a passionate full-stack developer dedicated to crafting
            exceptional digital experiences. With expertise in modern web
            technologies, I build scalable, performant applications that delight
            users.
          </motion.p>

          <motion.div
            className="my-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-3 text-white">
              Tech I Work With:
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-[#4ECCA3]/10 text-[#4ECCA3] border border-[#4ECCA3]/20 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#4ECCA3",
                    color: "#0B1221",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl leading-relaxed text-gray-300 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            My journey includes developing impactful projects like{" "}
            {projects.map((project, i) => (
              <React.Fragment key={project}>
                <motion.span
                  className="text-[#4ECCA3] font-medium hover:underline cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {project}
                </motion.span>
                {i < projects.length - 1 ? ", " : ""}
              </React.Fragment>
            ))}
            . With strong foundations in DSA and OOP, I thrive on solving
            complex problems and exploring innovative technologies.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#4ECCA3] to-teal-500 text-[#0B1221] font-bold hover:shadow-lg hover:shadow-[#4ECCA3]/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect 🚀
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="image-container relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-[#4ECCA3] to-teal-500 rounded-2xl blur-lg opacity-20"></div>
          <motion.img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover shadow-xl relative z-10 border-4 border-[#4ECCA3]/20"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
          <motion.div
            className="absolute -bottom-6 -right-6 bg-[#0B1221] px-4 py-2 rounded-lg border border-[#4ECCA3]/20 shadow-lg z-20"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ rotate: [0, 5, -5, 0] }}
          >
            <span className="text-[#4ECCA3] font-medium">Full-Stack Dev</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
