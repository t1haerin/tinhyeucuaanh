import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (window.getComputedStyle(target).cursor === 'pointer' || target.tagName === 'BUTTON' || target.tagName === 'A') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 mix-blend-screen"
        animate={{
          x: mousePos.x - (isHovering ? 20 : 10),
          y: mousePos.y - (isHovering ? 20 : 10),
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.2 }}
      >
        <div className={`rounded-full bg-champagne-gold blur-[2px] transition-all duration-300 ${isHovering ? 'w-10 h-10 opacity-60' : 'w-5 h-5 opacity-80'}`} />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />
    </>
  );
}
