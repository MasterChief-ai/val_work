import { useEffect, useRef } from "react";

const HEARTS = ["💕", "💖", "💗", "💝", "💘"];

const FloatingHearts = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createHeart = () => {
      const heart = document.createElement("span");
      heart.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
      heart.style.position = "fixed";
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.bottom = "-20px";
      heart.style.fontSize = `${Math.random() * 16 + 12}px`;
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "1";
      heart.style.animation = `float-heart ${Math.random() * 6 + 8}s linear forwards`;
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 14000);
    };

    // Create a few initial hearts
    for (let i = 0; i < 3; i++) {
      setTimeout(createHeart, i * 800);
    }

    const interval = setInterval(createHeart, 4000);
    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[1]" />;
};

export default FloatingHearts;
