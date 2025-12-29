import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  threshold?: number;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "100%", 
  delay = 0, 
  duration = 0.6,
  direction = "up",
  className = "",
  threshold = 0.15
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // We disconnect to ensure the animation only runs once per session
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0)";
    switch (direction) {
      case "up": return "translate3d(0, 40px, 0)";
      case "down": return "translate3d(0, -40px, 0)";
      case "left": return "translate3d(40px, 0, 0)";
      case "right": return "translate3d(-40px, 0, 0)";
      case "none": return "translate3d(0, 0, 0)";
      default: return "translate3d(0, 40px, 0)";
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${className}`}
      style={{ 
        width, 
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}s cubic-bezier(0.2, 0.65, 0.3, 0.9) ${delay}s`
      }}
    >
      {children}
    </div>
  );
};