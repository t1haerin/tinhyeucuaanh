import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { picPath } from '../assetPaths';

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('love-timer');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Immersive Romantic Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url('${picPath('pic.jpg')}')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-love-900/75 via-black/20 to-black/90" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.72)_72%)]" />

      {/* Background Soft Glows (Candles) */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne-gold/30 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-love-400/30 blur-[120px] animate-pulse animation-delay-2000" />

      <div className="relative z-10 flex flex-col items-center px-4 text-center mt-10 md:mt-0 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 flex space-x-2 text-love-300"
        >
          <Heart className="h-8 w-8 animate-pulse fill-current drop-shadow-glow" />
          <Heart className="h-12 w-12 animate-heartbeat fill-current drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
          <Heart className="h-8 w-8 animate-pulse fill-current drop-shadow-glow" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-serif text-5xl font-medium tracking-tight text-white md:text-7xl lg:text-8xl text-shadow-md mb-2 drop-shadow-[0_0_25px_rgba(254,205,211,0.5)]"
        >
          Happy 6 months anniversary!<br/> 
        </motion.h1>
        
        {/* Names and Avatars Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-12 w-full"
        >
          {/* Tuấn Kiệt */}
          <div className="flex flex-col items-center group">
            <div className="relative w-48 h-64 md:w-56 md:h-72 ring-2 ring-champagne-gold/50 rounded-full overflow-hidden mb-6 shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-transform duration-700 group-hover:scale-105">
              <img src={picPath('anh.jpg')} alt="Anh" className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
            <p className="font-cursive text-4xl md:text-6xl text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">Anh</p>
          </div>

          {/* Center heart line */}
          <div className="hidden md:flex flex-col items-center px-2 self-center justify-center pt-2">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-love-400 to-transparent" />
            <Heart className="w-10 h-10 text-love-400 fill-love-400 mx-4 my-4 drop-shadow-[0_0_20px_rgba(251,113,133,0.9)] animate-pulse" />
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-love-400 to-transparent" />
          </div>

          <div className="flex md:hidden items-center my-6">
            <Heart className="w-10 h-10 text-love-400 fill-love-400 drop-shadow-[0_0_20px_rgba(251,113,133,0.9)] animate-pulse" />
          </div>

          {/* Mai Phương */}
          <div className="flex flex-col items-center group">
            <div className="relative w-48 h-64 md:w-56 md:h-72 ring-2 ring-love-300/50 rounded-full overflow-hidden mb-6 shadow-[0_0_40px_rgba(251,113,133,0.3)] transition-transform duration-700 group-hover:scale-105">
              <img src={picPath('em.jpg')} alt="Em" className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
            <p className="font-cursive text-4xl md:text-6xl text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">Em</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="mt-12 max-w-2xl mx-auto font-sans text-lg font-light leading-relaxed text-love-50 md:text-xl text-shadow-sm"
        >
          Sáu tháng qua dù chưa dài nhưng anh rất hạnh phúc vì có em ở bên. Anh mong rằng chúng mình có thể già đi cùng nhau.
        </motion.p>

        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 mb-20 inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-3 font-sans text-base tracking-wide text-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-md transition border border-white/20 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        >
          Chuyện tình của tụi mình.
        </motion.button>
      </div>
    </section>
  );
}
