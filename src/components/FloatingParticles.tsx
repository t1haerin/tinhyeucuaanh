import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const NUM_PARTICLES = 30;

export default function FloatingParticles() {
  const [particles, setParticles] = useState<{ id: number; left: string; top: string; delay: number; size: number; type: string }[]>([]);

  useEffect(() => {
    const types = ['blur', 'heart', 'glow', 'petal'];
    const generated = Array.from({ length: NUM_PARTICLES }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      size: Math.random() * 15 + 8, // 8px to 23px
      type: types[Math.floor(Math.random() * types.length)],
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map((p) => {
        if (p.type === 'petal') {
           return (
             <motion.div
              key={p.id}
              className="absolute text-love-500/70 drop-shadow-[0_0_5px_rgba(244,63,94,0.5)]"
              style={{ left: p.left, top: p.top }}
              animate={{
                y: [-100, 1000],
                x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                opacity: [0, 0.8, 0.8, 0],
                rotate: [0, 360, 720]
              }}
              transition={{ duration: Math.random() * 15 + 20, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
            >
              {/* Approximated Rose Petal with SVG */}
              <svg width={p.size * 1.5} height={p.size * 1.5} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" style={{transform: "scaleY(1.3) scaleX(0.7)", transformOrigin: "center"}} fill="url(#petalGrad)"/>
                <defs>
                   <linearGradient id="petalGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#881337" />
                   </linearGradient>
                </defs>
              </svg>
            </motion.div>
           );
        } else if (p.type === 'heart') {
          return (
            <motion.div
              key={p.id}
              className="absolute text-love-400/50"
              style={{ left: p.left, top: p.top }}
              animate={{
                y: [100, -500],
                x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                opacity: [0, 0.6, 0.6, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: Math.random() * 10 + 15, repeat: Infinity, delay: p.delay, ease: "linear" }}
            >
              <Heart width={p.size} height={p.size} className="fill-current" />
            </motion.div>
          );
        } else if (p.type === 'glow') {
          return (
             <motion.div
              key={p.id}
              className="absolute rounded-full bg-champagne-gold/60 shadow-[0_0_15px_3px_rgba(212,175,55,0.8)]"
              style={{ left: p.left, top: p.top, width: p.size / 2, height: p.size / 2 }}
              animate={{
                y: [0, -300],
                x: [0, Math.random() * 30 - 15, Math.random() * 30 - 15, 0],
                opacity: [0, 0.8, 0.8, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{ duration: Math.random() * 8 + 10, repeat: Infinity, delay: p.delay, ease: "linear" }}
            />
          );
        }
        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/20 blur-[2px]"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{
              y: [0, -200],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{ duration: Math.random() * 12 + 10, repeat: Infinity, delay: p.delay, ease: "linear" }}
          />
        );
      })}
    </div>
  );
}
