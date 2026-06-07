import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  MapPin,
  Mail,
  Paperclip,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "General Inquiry",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    if (!validateForm()) return;

    setIsSubmitting(true);

    const form = new FormData();
    form.append("access_key", "e6aec6e2-b8c8-4049-9111-09f2888cfd60");
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) form.append(key, formData[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          inquiryType: "General Inquiry",
          file: null,
        });
      } else {
        setStatus({
          type: "error",
          message:
            result.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nitkkr.amit07@gmail.com",
      href: "mailto:nitkkr.amit07@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7042008251",
      href: "tel:+917042008251",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Faridabad, Haryana",
      href: null,
    },
  ];

  return (
    <motion.main
      className="pt-20 lg:pt-[0rem] bg-[#0f1629] text-white min-h-screen py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero min-h-[90vh] flex items-center relative px-4 sm:px-6 lg:px-8">
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
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

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm text-cyan-300">
                  Open For Opportunities
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-black leading-tight">
                Let's Build
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Something Amazing
                </span>
              </h2>

              <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
                Whether you're looking for a Full Stack Developer,
                discussing a new project, or exploring collaboration
                opportunities, I'd be excited to connect and learn
                more about your goals.
              </p>

              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-5 p-5 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-cyan-500/40 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="text-slate-400 group-hover:text-slate-200 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 blur-sm"></div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { name: "name", type: "text", label: "Your Name" },
                    { name: "email", type: "email", label: "Your Email" },
                    { name: "phone", type: "tel", label: "Phone (Optional)" },
                  ].map((field) => (
                    <div key={field.name}>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.label}
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors[field.name]
                          ? "border-red-500"
                          : "border-gray-700 focus:border-blue-500"
                          } focus:outline-none transition-colors`}
                        value={formData[field.name]}
                        onChange={handleChange}
                      />
                      {errors[field.name] && (
                        <motion.p
                          className="text-red-400 text-sm mt-1 flex items-center"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors[field.name]}
                        </motion.p>
                      )}
                    </div>
                  ))}

                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="5"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.message
                        ? "border-red-500"
                        : "border-gray-700 focus:border-blue-500"
                        } focus:outline-none transition-colors resize-none`}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && (
                      <motion.p
                        className="text-red-400 text-sm mt-1 flex items-center"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <select
                      name="inquiryType"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      value={formData.inquiryType}
                      onChange={handleChange}
                    >
                      {[
                        "General Inquiry",
                        "Collaboration",
                        "Job Opportunity",
                        "Feedback",
                      ].map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center justify-center px-4 py-3 rounded-lg bg-white/5 border border-gray-700 cursor-pointer hover:bg-white/10 transition-colors">
                      <Paperclip className="w-5 h-5 mr-2" />
                      <span>
                        {formData.file
                          ? formData.file.name
                          : "Attach File (Optional)"}
                      </span>
                      <input
                        type="file"
                        name="file"
                        className="hidden"
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <motion.span
                      className="absolute left-0 top-0 h-full bg-white/20"
                      animate={{
                        width: ["0%", "100%", "0%"],
                        left: ["0%", "0%", "100%"],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </motion.button>

                {status.type && (
                  <motion.div
                    className={`p-3 rounded-lg flex items-center ${status.type === "success"
                      ? "bg-green-900/30 text-green-400 border border-green-800"
                      : "bg-red-900/30 text-red-400 border border-red-800"
                      }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {status.type === "success" ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-2" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
