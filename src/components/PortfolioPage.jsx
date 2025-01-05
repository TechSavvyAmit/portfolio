import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section className="about-section bg-[#0B1221] text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            {" "}
            Hi, I’m Amit—a dynamic full-stack developer passionate about
            building efficient, user-focused solutions. I specialize in modern
            web technologies, including{" "}
            <a className="text-[#4ECCA3] px-2" href="https://olova.js.org/">
              React
            </a>
            ,
            <a className="text-[#4ECCA3] px-2" href="https://olova.js.org/">
              Node.js
            </a>
            , and{" "}
            <a className="text-[#4ECCA3] px-2" href="https://olova.js.org/">
              MongoDB
            </a>
            , creating seamless, scalable applications. My journey includes
            developing impactful projects like
            <a className="text-[#4ECCA3] px-2" href="https://olova.js.org/">
              FitHub
            </a>
            , a fitness tracking platform empowering healthier lifestyles, and
            <a className="text-[#4ECCA3] px-2" href="https://olova.js.org/">
              Chess Master
            </a>
            , a real-time multiplayer chess game bringing strategy to life. With
            a strong foundation in Data Structures and Algorithms (DSA) and
            Object-Oriented Programming (OOP), I thrive on solving complex
            problems and exploring innovative technologies. Fueled by curiosity,
            I’m dedicated to crafting tools and frameworks that streamline
            workflows and create tangible value. Let's build something
            extraordinary together! 🚀
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
