import { useEffect, useState, useRef } from "react";
import "./CustomCursor.css";

const emojis = ["✨", "🌟", "⚡", "❄️", "💫", "🌸"];

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [clicked, setClicked] = useState(false);
  const trailRefs = useRef([]);
  const particleTimeout = useRef(null);

  // Create trail elements
  useEffect(() => {
    trailRefs.current = Array(10)
      .fill()
      .map((_, i) => ({
        id: i,
        x: position.x,
        y: position.y,
        delay: i * 30,
        visible: false,
      }));
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Update trail positions with delay
      trailRefs.current = trailRefs.current.map((trail, i) => {
        if (i === 0) {
          return { ...trail, x: e.clientX, y: e.clientY, visible: true };
        } else {
          return {
            ...trail,
            x: trailRefs.current[i - 1].x,
            y: trailRefs.current[i - 1].y,
            visible: true,
          };
        }
      });

      // Random particles while moving
      if (particleTimeout.current) clearTimeout(particleTimeout.current);
      particleTimeout.current = setTimeout(() => {
        if (Math.random() > 0.7) {
          createParticle(e.clientX, e.clientY);
        }
      }, 100);
    };

    const handleMouseDown = (e) => {
      setClicked(true);
      createRipple(e.clientX, e.clientY);
      createSparkleBurst(e.clientX, e.clientY);
      setTimeout(() => setClicked(false), 300);
    };

    const handleInteractiveEnter = () => {
      setCursorVariant("active");
    };

    const handleInteractiveLeave = () => {
      setCursorVariant("default");
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);

    const interactiveElements = document.querySelectorAll(
      'a, button, .interactive-element, .nav-link, input, textarea, select, [role="button"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleInteractiveEnter);
      el.addEventListener("mouseleave", handleInteractiveLeave);
      el.style.cursor = "none";
    });

    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractiveEnter);
        el.removeEventListener("mouseleave", handleInteractiveLeave);
        el.style.cursor = "";
      });
      document.body.style.cursor = "";
      if (particleTimeout.current) clearTimeout(particleTimeout.current);
    };
  }, []);

  const createParticle = (x, y) => {
    const particle = document.createElement("div");
    particle.className = "cursor-particle";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  };

  const createSparkleBurst = (x, y) => {
    for (let i = 0; i < 5; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "cursor-sparkle";
      sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1500);
    }
  };

  const createRipple = (x, y) => {
    const ripple = document.createElement("div");
    ripple.className = "click-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
  };

  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`cursor ${
          cursorVariant === "active" ? "cursor-active" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Trail Elements */}
      {trailRefs.current.map((trail, i) => (
        <div
          key={trail.id}
          className={`cursor-trail ${trail.visible ? "trail-visible" : ""}`}
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transitionDelay: `${trail.delay}ms`,
            background: `rgba(96, 165, 250, ${0.7 - i * 0.07})`,
            width: `${8 - i * 0.5}px`,
            height: `${8 - i * 0.5}px`,
          }}
        />
      ))}
    </>
  );
}
