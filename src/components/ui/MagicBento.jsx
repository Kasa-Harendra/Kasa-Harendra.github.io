import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const BentoCard = ({ 
  item, 
  className,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  spotlightRadius = 300,
  particleCount = 12,
  glowColor = "132, 0, 255"
}) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);

  // Mouse position for spotlight and tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for tilt
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  // Tilt transforms
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  useEffect(() => {
    if (enableStars) {
      const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 2
      }));
      setParticles(newParticles);
    }
  }, [enableStars, particleCount]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const clientX = e.clientX;
    const clientY = e.clientY;
    
    // Calculate mouse position relative to card center for tilt
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    const normalizedX = (clientX - centerX) / width;
    const normalizedY = (clientY - centerY) / height;
    
    x.set(normalizedX);
    y.set(normalizedY);
    
    // Update spotlight position via CSS variables for better performance
    ref.current.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
    ref.current.style.setProperty('--mouse-y', `${clientY - rect.top}px`);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Parse glow color
  const glowColorStyle = `rgba(${glowColor}, 0.6)`;
  const spotlightColorStyle = `rgba(${glowColor}, 0.15)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-6 transition-all duration-300 ${className} ${
        enableBorderGlow && isHovered ? 'border-transparent' : ''
      }`}
    >
      {/* Border Glow */}
      {enableBorderGlow && (
        <div 
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            boxShadow: `inset 0 0 0 2px ${glowColorStyle}, 0 0 30px -5px ${glowColorStyle}`
          }}
        />
      )}

      {/* Spotlight */}
      {enableSpotlight && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(${spotlightRadius}px circle at var(--mouse-x) var(--mouse-y), ${spotlightColorStyle}, transparent 40%)`,
          }}
        />
      )}

      {/* Stars/Particles */}
      {enableStars && isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: 0.6,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col" style={{ transform: enableTilt ? "translateZ(20px)" : "none" }}>
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        
        <motion.div
          initial={false}
          animate={{ 
            opacity: textAutoHide ? (isHovered ? 1 : 0.6) : 1,
            y: textAutoHide ? (isHovered ? 0 : 10) : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 mt-auto">
            {item.link && item.link !== "#" && (
               <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1 font-medium">
                 View Project →
               </a>
            )}
            {item.github && (
               <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 font-medium transition-colors">
                 GitHub ↗
               </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const MagicBento = ({ items, ...props }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto [perspective:1000px]">
      {items.map((item, index) => (
        <BentoCard
          key={index}
          item={item}
          className={index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"}
          {...props}
        />
      ))}
    </div>
  );
};

export default MagicBento;
