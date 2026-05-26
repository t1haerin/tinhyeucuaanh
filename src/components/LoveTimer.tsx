import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function LoveTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date is November 26, 2025 (6 months ago from May 26 2026)
  const targetDate = new Date('2025-11-26T00:00:00').getTime();

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = now - targetDate;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Ngày', value: timeLeft.days },
    { label: 'Giờ', value: timeLeft.hours },
    { label: 'Phút', value: timeLeft.minutes },
    { label: 'Giây', value: timeLeft.seconds },
  ];

  return (
    <section id="love-timer" className="relative flex flex-col items-center justify-center py-32 px-6 overflow-hidden">
      {/* Background Image - Romantic Roses */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-love-950/70 to-black/80" />
      
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-love-400 to-transparent opacity-40 shadow-[0_0_10px_rgba(244,63,94,0.8)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full"
      >
        <div className="mb-6 rounded-full bg-love-900/50 p-5 shadow-[0_0_30px_rgba(244,63,94,0.4)] border border-love-500/30 backdrop-blur-md">
          <Heart className="h-12 w-12 text-love-300 animate-heartbeat fill-love-400 drop-shadow-glow" />
        </div>
        
        <h2 className="mb-12 font-serif text-3xl font-medium text-white md:text-5xl drop-shadow-md">
          Chúng mình đã bước cùng nhau được...
        </h2>

        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-black/40 backdrop-blur-md p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-love-500/20 hover:border-love-400 hover:shadow-[0_0_30px_rgba(244,63,94,0.3)] transition-all duration-500"
            >
              <div className="absolute -inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-love-900/40 via-transparent to-love-500/20 transition-opacity duration-700" />
              <div className="font-serif text-5xl md:text-7xl font-light text-champagne-light mb-2 relative z-10 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">{String(unit.value).padStart(2, '0')}</div>
              <div className="font-sans text-sm md:text-base font-medium uppercase tracking-widest text-love-200 relative z-10">{unit.label}</div>
            </motion.div>
          ))}
        </div>
        
        <p className="mt-16 font-cursive text-4xl text-love-200 md:text-5xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          "Mỗi giây phút bên em đều là một phép màu..."
        </p>
      </motion.div>
    </section>
  );
}
