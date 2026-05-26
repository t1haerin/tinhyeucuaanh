import { motion } from 'motion/react';
import { Flower, Heart } from 'lucide-react';

const REASONS = [
  "Vì em chẳng làm gì nhưng cũng rất dễ thương, chỉ từ cái cách em nhắn tin, giận dỗi hay trêu anh.",
  "Nhiều lúc, mặc dù anh đang rất căng thẳng với chuyện thi cử, du học nhưng em khiến mọi nỗi lo đều tan biến",
  "Dù đã bên nhau 6 tháng rồi nhưng anh vẫn thường xuyên thấy bất ngờ khi nghĩ đến việc bọn mình hợp nhau đến nhường nào.",
  "Vì em là người đầu tiên dạy anh cách yêu, cách quan tâm, che chở cho một ai đấy khác, đôi lúc còn đặt họ lên trên. Quan trọng hơn, em là người đầu tiên khiến anh thấy được yêu.",
  "Vì anh ngưỡng mộ cô gái cực kỳ độc lập, dẫu có những lúc chông chênh với gia đình, em vẫn kiên cường tìm ra lối đi cho riêng mình.",
  "Đơn giản vì em là ngoại lệ lớn nhất đời anh, một bông hoa mùa xuân mỏng manh cần có người để ý, bảo vệ thật an toàn."
];

export default function Reasons() {
  return (
    <section className="relative overflow-hidden py-32 px-6">
      {/* Deep Romantic Candles & Roses Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549887532-68b320d3f2fc?q=80&w=2000&auto=format&fit=crop')" }} /* candle light and roses */
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-love-900/60 to-black/90" />
      
      {/* Decorative blurred blobs */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-500/20 blur-[100px] animate-pulse" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-love-500/20 blur-[100px] animate-pulse" />

      <div className="mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Flower className="w-12 h-12 text-champagne-gold mx-auto mb-4 opacity-100 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]" strokeWidth={1.5} />
          <h2 className="font-serif text-4xl text-white md:text-5xl drop-shadow-lg">Những Điều Nhỏ Bé Anh Yêu Ở Em</h2>
          <div className="mt-6 flex justify-center">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-champagne-gold to-transparent" />
          </div>
        </motion.div>

        <div className="flex flex-col gap-10">
          {REASONS.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.4 }}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div 
                className="relative max-w-xl rounded-sm bg-black/40 backdrop-blur-md px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] transition-shadow hover:shadow-[0_15px_40px_rgba(244,63,94,0.3)] border border-love-900/50"
                style={{
                  transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`
                }}
              >
                
                {/* Romantic glow pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-champagne-gold/20 rotate-[-1deg] shadow-[0_0_10px_rgba(212,175,55,0.5)] transform-gpu backdrop-blur-sm rounded-sm" />
                <div className="absolute -top-4 right-6 w-8 h-8 rounded-full bg-love-900/80 flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.6)] rotate-12 border border-love-400/50">
                   <Heart className="w-4 h-4 text-white fill-current" />
                </div>

                <div className="relative z-10">
                  <p className="font-cursive text-3xl text-champagne-light leading-relaxed drop-shadow-md">
                    "{reason}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
