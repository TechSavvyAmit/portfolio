import React, { useState } from "react";
import { Send, Phone, MapPin, Mail, Paperclip } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "General Inquiry",
    file: null,
  });

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", "e6aec6e2-b8c8-4049-9111-09f2888cfd60"); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);
    form.append("inquiry_type", formData.inquiryType);

    if (formData.file) {
      form.append("file", formData.file);
    }

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "General Inquiry",
          file: null,
        });
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <main className="pt-20 lg:pt-[0rem] bg-[#0f1629] text-white min-h-screen">
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Drop us a message!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">amitk704200@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Faridabad, Haryana, 121004</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl relative">
              {/* Grid Background for Form Section */}
              <div className="absolute inset-0 bg-grid pattern bg-transparent opacity-30 z-0"></div>
              <form onSubmit={handleSubmit} className="space-y-6 z-10 relative">
                <div className="grid grid-cols-1 gap-6">
                  {/* Input Fields */}
                  {["name", "email", "phone", "message"].map((field) => (
                    <div key={field}>
                      {field !== "message" ? (
                        <input
                          type={field === "email" ? "email" : "text"}
                          placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                          value={formData[field]}
                          onChange={(e) =>
                            setFormData({ ...formData, [field]: e.target.value })
                          }
                        />
                      ) : (
                        <textarea
                          placeholder="Your Message"
                          rows="4"
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                          value={formData[field]}
                          onChange={(e) =>
                            setFormData({ ...formData, [field]: e.target.value })
                          }
                        ></textarea>
                      )}
                    </div>
                  ))}

                  <div>
                    <select
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          inquiryType: e.target.value,
                        })
                      }
                    >
                      {["General Inquiry", "Collaboration", "Support"].map(
                        (type) => (
                          <option
                            key={type}
                            value={type}
                            style={{ color: "grey" }}
                          >
                            {type}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div>
                    <input
                      type="file"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      onChange={(e) =>
                        setFormData({ ...formData, file: e.target.files[0] })
                      }
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Status Message */}
              {status && (
                <div className="mt-4 text-center text-gray-300">
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
