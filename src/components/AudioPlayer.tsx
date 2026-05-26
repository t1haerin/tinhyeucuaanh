import { useRef, useState } from 'react';
import { Music, Pause } from 'lucide-react';
import { motion } from 'motion/react';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/05/16/audio_959323eb00.mp3"
      />
      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] backdrop-blur-md border border-white/40 text-love-900 transition-all hover:bg-white/40"
      >
        {isPlaying ? (
          <Pause className="h-6 w-6 text-love-900" />
        ) : (
          <Music className="h-6 w-6 text-love-900" />
        )}
        
        {/* Glowing ripple effect when playing */}
        {isPlaying && (
          <span className="absolute -inset-2 -z-10 animate-ping rounded-full bg-white/30" />
        )}
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 whitespace-nowrap rounded-lg bg-white/50 px-3 py-1 text-sm font-medium text-love-900 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
          {isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc nền'}
        </span>
      </motion.button>
    </div>
  );
}
