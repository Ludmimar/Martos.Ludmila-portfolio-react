import { useEffect } from "react";

const FloatingPetals = () => {
  useEffect(() => {
    const container = document.querySelector(".petal-container");
    if (!container) return;

    const createPetal = () => {
      const petal = document.createElement("div");
      petal.className = "flower-petal";
      petal.innerHTML = `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <g fill="none" stroke="#ff6f91" stroke-width="1.5">
            <path d="M32 32 C36 20, 50 20, 44 32 C50 44, 36 44, 32 32 Z" fill="#ffb3c1"/>
            <circle cx="32" cy="32" r="2" fill="#ff4f70"/>
            <path d="M32 32 L36 28 M32 32 L28 28 M32 32 L36 36 M32 32 L28 36" stroke="#ff4f70" stroke-width="1"/>
          </g>
        </svg>
      `;

      // Random horizontal position
      petal.style.left = Math.random() * window.innerWidth + "px";
      
      // Random size
      const size = 20 + Math.random() * 25;
      petal.style.width = size + "px";
      petal.style.height = size + "px";
      
      // Random animation duration
      const duration = 6 + Math.random() * 6;
      petal.style.animationDuration = duration + "s";
      
      // Random delay
      petal.style.animationDelay = Math.random() * 10 + "s";
      
      // Random initial rotation
      petal.style.transform = `rotate(${Math.random() * 360}deg)`;

      container.appendChild(petal);

      // Remove petal after animation
      setTimeout(() => {
        if (petal.parentNode) {
          petal.parentNode.removeChild(petal);
        }
      }, (duration + 10) * 1000);
    };

    // Create petals periodically
    const interval = setInterval(createPetal, 800);

    // Create initial petals
    for (let i = 0; i < 15; i++) {
      setTimeout(createPetal, i * 200);
    }

    return () => clearInterval(interval);
  }, []);

  return <div className="petal-container fixed inset-0 pointer-events-none z-0" />;
};

export default FloatingPetals;