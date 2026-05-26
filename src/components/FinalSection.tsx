import { motion } from 'motion/react';
import { Sparkles, Moon } from 'lucide-react';
import { picPath } from '../assetPaths';

export default function FinalSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-zinc-950 px-6 py-32 text-center text-white">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: `url('${picPath('pic.jpg')}')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/85 via-love-900/45 to-black/90" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,241,242,0.08),rgba(0,0,0,0.76)_70%)]" />
      {/* Lanterns / Sparks */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-champagne-gold opacity-30 shadow-[0_0_20px_4px_rgba(212,175,55,0.5)]"
            style={{
              width: Math.random() * 8 + 4 + 'px',
              height: Math.random() * 8 + 4 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [-20, -500],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center max-w-4xl"
      >
        <Moon className="w-12 h-12 text-champagne-gold/50 mb-10 animate-float-slow fill-champagne-gold/20" />
        
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-champagne-light shadow-champagne-gold/50 drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">
          Và đây chỉ mới là<br /> sự khởi đầu...
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          viewport={{ once: true }}
          className="mt-12 font-sans text-xl md:text-2xl font-light tracking-wide text-zinc-300"
        >
          Hẹn em ở những chương tiếp theo của cuộc đời. Anh yêu em.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 2, duration: 2 }}
           viewport={{ once: true }}
           className="mt-20 flex gap-2 items-center text-champagne-gold/60"
        >
           <Sparkles className="w-5 h-5" />
           <span className="font-cursive tracking-wider text-xl">Mãi mãi & Mãi mãi</span>
           <Sparkles className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Floor Glow */}
      <div className="absolute -bottom-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 rounded-full bg-champagne-gold/5 blur-[150px] z-0" />
    </section>
  );
}
