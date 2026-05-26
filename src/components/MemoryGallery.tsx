import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Flower } from 'lucide-react';
import { picPath } from '../assetPaths';

const MEMORIES = [
  {
    id: 1,
    imageUrl: picPath('pic.jpg'),
    caption: 'Tình yêu của anh',
    date: 'Xinh số 1 thế giới'
  },
  {
    id: 2,
    imageUrl: picPath('pic2.jpg'),
    caption: 'Vợ tôi',
    date: 'Chỉ biết chơi mỗi Yue'
  },
  {
    id: 3,
    imageUrl: picPath('pic3.jpg'),
    caption: 'Công chúa của anh',
    date: 'Một ngày nhắc tên diệp linh 20 lần'
  },
  {
    id: 4,
    imageUrl: picPath('pic4.jpg'),
    caption: 'Cún yêu',
    date: 'Lúc dỗi cũng cute'
  }
];

export default function MemoryGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof MEMORIES[0] | null>(null);

  return (
    <section className="relative bg-love-50 py-32 px-6 overflow-hidden">
      {/* Soft romantic floral overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-[length:300px_300px] bg-center pointer-events-none mix-blend-color-burn" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}
      />
      
      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Flower className="w-10 h-10 text-love-400 mx-auto mb-4 opacity-70" />
          <h2 className="font-cursive text-5xl max-md:text-4xl text-love-900 mb-4 drop-shadow-sm">Vẻ Đẹp Của Em</h2>
          <p className="font-serif text-xl text-gray-600">Với anh, em luôn là người con gái đẹp nhất</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-14">
          {MEMORIES.map((memory, index) => {
            const rotation = index % 2 === 0 ? Math.random() * 4 - 2 : Math.random() * -4 + 2;
            return (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                whileHover={{ y: -15, scale: 1.02, rotate: 0, zIndex: 30 }}
                onClick={() => setSelectedImage(memory)}
                className="group relative cursor-pointer bg-[#fffaf8] p-5 pb-10 rounded-sm shadow-[0_15px_35px_rgba(136,19,55,0.13)] border border-love-100 hover:shadow-[0_25px_50px_rgba(136,19,55,0.24)] transition-all duration-300 transform-gpu"
                style={{ rotate: `${rotation}deg` }}
              >
                {/* Washi Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-white/40 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] rotate-[-2deg]" />
                
                <div className="overflow-hidden aspect-[4/5] bg-gray-100 relative shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-t from-love-900/25 via-transparent to-champagne-gold/10 group-hover:from-love-900/5 transition-colors z-10 duration-500" />
                  <img 
                    src={memory.imageUrl} 
                    alt={memory.caption} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter hover:sepia-0 sepia-[20%]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-8 text-center pt-2 relative">
                  <p className="font-cursive text-3xl text-love-900">{memory.caption}</p>
                  <p className="font-sans text-sm text-gray-500 mt-2 tracking-widest">{memory.date}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-pointer"
          >
            <motion.button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="h-10 w-10" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotate: 2 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[85vh] bg-[#fcf9f2] p-4 rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 backdrop-blur-md shadow-sm rotate-1 z-20" />
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.caption}
                className="max-h-[70vh] w-auto object-contain shadow-inner"
              />
              <div className="text-center p-6 bg-[#fcf9f2]">
                <p className="font-cursive text-4xl text-love-900">{selectedImage.caption}</p>
                <p className="font-sans text-sm text-love-400 mt-2 tracking-widest">{selectedImage.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
