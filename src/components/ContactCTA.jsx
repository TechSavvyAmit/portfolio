import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Rocket,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-blue-600/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] p-12 md:p-20 text-center shadow-2xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
            <Sparkles size={16} />
            Available for Opportunities
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Let's Build Something
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
            Whether you need a scalable web application, a modern
            user experience, or a developer who can transform ideas
            into real-world products, I'm ready to help bring your
            vision to life.
          </p>

          {/* Highlights */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-slate-300">
              <Code2 size={18} className="text-cyan-400" />
              Full Stack Development
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <Rocket size={18} className="text-cyan-400" />
              High Performance Solutions
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              Start a Conversation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              to="/projects"
              className="px-8 py-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg transition-all duration-300"
            >
              View My Work
            </Link>
          </div>

          {/* Bottom Text */}
          <p className="mt-8 text-sm text-slate-500">
            Open to Full-Time Roles • Freelance Projects • Collaborations
          </p>
        </motion.div>
      </div>
    </section>
  );
}