import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Flower2, Heart } from 'lucide-react';

export default function LoveLetter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-150px" });

  const text = `Gửi người con gái anh yêu thương nhất,

Nửa năm trôi qua nhanh như một chớp mắt, nhưng nhìn lại, anh thấy chúng ta đã dệt nên một bức tranh tuyệt đẹp từ những kỷ niệm vui buồn. Trước khi gặp em, thế giới của anh vô vị và trôi đi một cách bình lặng. Sự xuất hiện của em đã mang theo những dải màu ấm áp, rót đầy tình yêu thương vào từng ngóc ngách trong trái tim anh.

Anh vẫn còn nhớ như in lần đầu bọn mình gặp nhau. Ngay lần đó, em đã khoác tay anh, để lại ấn tượng mạnh mẽ trong anh. Thật kỳ lạ, dường như trái tim anh đã biết ngay lúc ấy rằng anh muốn gắn bó với nụ cười ấy suốt phần đời còn lại. Cảm ơn em đã bước đến, đã kiên nhẫn, dịu dàng và luôn yêu thương anh.

Mỗi cái nắm tay, mỗi cái ôm, mỗi ánh mắt trao nhau đều là những mảnh ghép vô giá mà anh trân trọng nhặt nhạnh mỗi ngày. Dù anh biết bọn mình còn hay cãi vã nhưng sau mỗi lần đó anh cảm thấy chúng mình đều trở nên gắn bó hơn. Anh biết anh không hoàn hào, còn nhiều khuyết điểm nhưng anh đảm bảo sẽ luôn dùng sự hoàn hảo nhất của tình yêu này để che chở và yêu thương em.

Chúc mừng 6 tháng của chúng mình, Vợ yêu. Cảm ơn em vì đã chọn ở lại và yêu thương anh.
Anh yêu em, hơn tất thảy những gì ngôn từ có thể diễn tả.`;

  // Split per paragraph for typing effect
  const paragraphs = text.split('\n\n');

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const lineVars = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center py-32 px-4 shadow-inner overflow-hidden">
      {/* Background Texture - Romantic Candlelit Desk */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549887754-1eb033b04c8f?q=80&w=2000&auto=format&fit=crop')" }} />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-love-900/90 via-black/60 to-black/90" />
      
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 40, rotate: -2 }}
        animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
        transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
      >
        {/* Parchment Paper Texture */}
        <div className="absolute inset-0 bg-[#f4e8d1]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}></div>
        
        <div className="relative z-20 p-8 md:p-16">
          <div className="absolute -left-4 -top-4 opacity-30">
            <Flower2 className="w-32 h-32 text-love-900" />
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-30">
            <Flower2 className="w-32 h-32 text-love-900" />
          </div>

          <div className="text-center mb-10 relative z-20">
            <h2 className="font-cursive text-5xl md:text-6xl text-love-900 drop-shadow-sm">Bức Thư Tình Gửi Em</h2>
            <div className="mx-auto mt-6 h-[2px] w-48 bg-gradient-to-r from-transparent via-love-800 to-transparent opacity-50" />
          </div>

          <motion.div
            variants={containerVars}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-20 space-y-6 font-serif text-lg md:text-xl leading-loose text-gray-800"
          >
            {paragraphs.map((para, i) => (
               <motion.p key={i} variants={lineVars} className="text-justify indent-8 tracking-wide">
                 {para}
               </motion.p>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: paragraphs.length * 0.5 + 1.5, duration: 1 }}
            className="relative z-20 mt-16 text-right flex flex-col items-end"
          >
            <p className="font-cursive text-4xl text-love-900">Mãi Yêu, Anh</p>
            {/* Wax seal mock */}
            <div className="mt-4 w-16 h-16 rounded-full bg-love-900 flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] border-4 border-love-800 rotate-12">
               <Heart className="w-8 h-8 text-love-200 fill-current" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
