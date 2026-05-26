import { motion } from 'motion/react';
import { Heart, Coffee, Star, Sparkles, Smile } from 'lucide-react';

const RULES = [
  {
    icon: Coffee,
    title: "Đam Mê Ăn Uống",
    content: "Đồ ăn: Sườn, bánh ngọt, bánh tráng nướng, khoai nướng. Thích ăn vịt quay, vịt nướng, ngan và tôm. Không kén ăn nhưng KHÔNG ăn đồ quá cay và ĐẶC BIỆT KHÔNG thích cá. Đồ uống: trà sữa 3 ae tocotoco, matcha, Dodo tiramisu ovaltine vị matcha, và trà sữa hương nhài bingxue."
  },
  {
    icon: Sparkles,
    title: "Sở Thích & Tính Cách",
    content: "Rất thích đi workshop, tô tượng. Rất thích các trò tâm linh và đọc Boylove. Đặc biệt thích em bé và hoa. Tính tình \"siêu trẻ trâu\", hay đang nhắn tin thì biến mất 3-4 phút rồi mới quay lại. Thích skinship (ctct) và hay đùa linh tinh về chim."
  },
  {
    icon: Star,
    title: "Style Xinh Đẹp Của Em",
    content: "Rất thích mặc váy. Tone da neutral, nên tuyệt đối tránh mỹ phẩm rẻ tiền. Đặc biệt ghi nhớ các hãng son em thích để mua cho chuẩn: Romand, Lilybyred, Peripera, BBIA, 3CE."
  },
  {
    icon: Smile,
    title: "Lưu Ý Quan Trọng Cho Anh",
    content: "Em bị chấn thương ở chân nên tuyệt đối phải tránh các trò nguy hiểm (đặc biệt sợ trượt băng do có thể bị đau). Tuần tự lưu nhớ: Em bị dị ứng với một thành phần nào đó trong kháng sinh, lúc ốm đau anh phải để ý thật kỹ!"
  }
];

export default function Handbook() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-32 px-6">
      {/* Deep Romantic Background with dark roses/candles */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?q=80&w=2000&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-love-900/60 via-black/80 to-black/95" />

      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Heart className="w-12 h-12 text-love-400 mx-auto mb-4 animate-pulse fill-love-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]" />
          <h2 className="font-serif text-4xl md:text-5xl text-champagne-light drop-shadow-md">Sổ Tay Cưng Chiều "Em Yêu"</h2>
          <div className="mt-6 flex justify-center">
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-love-400 to-transparent opacity-60" />
          </div>
          <p className="mt-4 font-sans text-love-100 font-light max-w-2xl mx-auto italic opacity-90">
            "Vài dòng bí kíp anh đã nhắc bản thân phải khắc sâu vào tim..."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {RULES.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative bg-[#1a1012]/80 backdrop-blur-md p-8 rounded-xl border border-love-900/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-[#2a151b] transition-colors"
              >
                {/* Candle light glow behind the card */}
                <div className="absolute -inset-1 bg-gradient-to-br from-love-500/20 to-champagne-gold/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-love-900/50 border border-love-500/30 text-love-300 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl text-champagne-light">{rule.title}</h3>
                  </div>
                  <p className="font-sans text-love-100/80 leading-relaxed font-light text-lg tracking-wide whitespace-pre-line">
                    {rule.content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
