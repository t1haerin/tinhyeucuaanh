import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart } from 'lucide-react';
import { picPath } from '../assetPaths';

const TIMELINE_EVENTS = [
  {
    id: 1,
    imageUrl: picPath('1.jpg'),
    date: "Khoảnh khắc bắt đầu",
    title: "Lần đầu bọn mình nói chuyện.",
    desc: "Em tìm được anh qua cfs trường anh, hôm đấy là ngày 24/10. Lúc đó anh chẳng thể ngờ sẽ yêu em nhiều như này. ",
  },
  {
    id: 2,
    imageUrl: picPath('2.jpg'),
    date: "Nick và Judy",
    title: "Vẫn là chúng mình",
    desc: "Lần đầu tiên anh để avt đôi, trước khi quen em anh nghĩ điều này thật vớ vẩn nhưng anh luôn rất thích bức ảnh này =)).",
  },
  {
    id: 3,
    imageUrl: picPath('2b.jpg'),
    date: "Couple2",
    title: "Tải được 3 ngày =))",
    desc: "Em còn rủ anh tải trò này về. Aiu còn cố gắng kiếm tiền mua nội thất, ghế công chúa cho em.",
  },
  {
    id: 4,
    imageUrl: picPath('3.jpg'),
    date: "Bức Photobooth đầu tiên.",
    title: "Bức ảnh đầu của bọn mình.",
    desc: "Đây cũng là lần đầu em đưa anh đi DNA, xong từ đấy nghiện luôn. Mặc dù em không thức bức này nhưng anh thật sự nghĩ nó siu siu siu đẹp.",
  },
  {
    id: 5,
    imageUrl: picPath('4.jpg'),
    date: "Lần đầu làm chuyện ấy",
    title: "Hóng hôm tây =)))",
    desc: "Này là vào đúng hôm valentine nè, anh vừa lên từ dưới Hải Phòng. Bọn mình vào đây xong chả làm gì =))",
  },
  {
    id: 6,
    imageUrl: picPath('4vzCEOVN.jpg'),
    date: "times cityyyyy",
    title: "Đố eiu kể lại được hôm đấy =))",
    desc: "Dù ban đầu có không vui nhưng ở thủy cung là lúc anh nhớ nhất trong quãng thời gian yêu em đó.",
  },
  {
    id: 7,
    imageUrl: picPath('5.jpg'),
    date: "Trò nhạc nhạc",
    title: "Chơi siêu vui",
    desc: "Hồi đấy em giới thiệu cho anh, xong thỉnh thoảng cứ chán là bọn mình lại chơi. Lần nào nói cùng một lyrics aiu cx thấy siêu tâm linh luôn.",
  },
  {
    id: 8,
    imageUrl: picPath('6.jpg'),
    date: "Note đôi",
    title: "Anh để note rep em nè.",
    desc: "Hơi random nhưng aiu thấy siu siu cute nên mới chụp lại á.",
  },
  {
    id: 9,
    imageUrl: picPath('7.jpg'),
    date: "???",
    title: "ối dồi ôi",
    desc: "bby trả lời ngay",
  },
  {
    id: 10,
    imageUrl: picPath('8.jpg'),
    date: "đi mua mixueee",
    title: "Chiều ebe nhất tgioi",
    desc: "Hôm này anh đi mua mixue với đồ ăn đến cho em nè, mixue mất điện nên anh còn xin ngta chụp ảnh =))",
  },
  {
    id: 11,
    imageUrl: picPath('9.jpg'),
    date: "8/3",
    title: "Đóa hoa đầu tiên a tặng em",
    desc: "Bọn mình đi ăn rồi cùng nhau đi chọn hoa, anh nhớ em siu thích đóa nay luôn.s",
  },
  {
    id: 12,
    imageUrl: picPath('10.jpg'),
    date: "Tình yêu bất diệt",
    title: "Hoa vô sắc trước em",
    desc: "Anhr này của là một trong những bức đẹp nhất của bby á.",
  },
  {
    id: 13,
    imageUrl: picPath('11.jpg'),
    date: "đi tô tươngggg",
    title: "Vẫn là Nick và Judy nè",
    desc: "Bọn mình cùng đi tô tượng ở royal city, hôm đầy dù ko bt nhưng aiu đã siêu cố gắng mặc dù thra em gánh đến 90%",
  },
  {
    id: 14,
    imageUrl: picPath('12.jpg'),
    date: "học meet nè",
    title: "Em chụp aiu cgi ýyy",
    desc: "Em rất thích chụp dìm anh trong khi bọn mình call meet, điển hình là bức này.",
  },
  {
    id: 15,
    imageUrl: picPath('13.jpg'),
    date: "chu môi cute thế",
    title: "Còn lấy điện thoại anh",
    desc: "Em cũng rất thích chụp ảnh bằng máy anh nữa, bức nào cx cute vch nên nếu em ko bắt xóa là anh sẽ giữ.",
  },
  {
    id: 16,
    imageUrl: picPath('14.jpg'),
    date: "Từ bây giờ về sau",
    title: "Chúng ta của hiện tại",
    desc: "Sáu tháng là một chương thật đẹp, nhưng anh tin câu chuyện của mình còn dài hơn thế. Cảm ơn em vì đã ở đây, trong tim anh.",
  }
];

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<typeof TIMELINE_EVENTS[0] | null>(null);

  return (
    <section className="bg-[#120a14] py-32 px-4 sm:px-6 text-white relative overflow-hidden">
      {/* Starry Night Effect Background */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

      <div className="mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-5xl font-light text-love-200">Kỷ Niệm Của Chúng Mình</h2>
          <p className="mt-6 font-sans font-light tracking-widest text-love-100 uppercase text-sm">Chạm vào từng khung hình để đọc những lời yêu</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-love-400/20 via-love-400/50 to-love-400/20 md:-translate-x-1/2" />

          <div className="space-y-24 md:space-y-32">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={event.id} className="relative flex flex-col md:flex-row items-center w-full">
                  {/* Glowing Node */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-love-600 border-2 border-[#120a14] shadow-[0_0_15px_rgba(251,113,133,0.8)] md:-translate-x-1/2 flex items-center justify-center z-10">
                    <Heart className="w-3 h-3 text-white fill-white" />
                  </div>

                  {/* Content Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`ml-20 md:ml-0 md:w-1/2 w-[calc(100%-6rem)] ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-last text-left'}`}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors shadow-lg">
                        <span className="font-mono text-love-300 text-xs tracking-widest uppercase">{event.date}</span>
                        <h3 className="font-serif text-2xl mt-2 leading-snug">{event.title}</h3>
                      </div>
                      
                      {/* Image Thumbnail */}
                      <div 
                        onClick={() => setSelectedEvent(event)}
                        className={`relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-xl ${isEven ? 'md:ml-auto' : ''}`}
                      >
                        <div className="absolute inset-0 bg-love-900/40 group-hover:bg-transparent transition-colors z-10 duration-500 flex items-center justify-center">
                          <span className="bg-black/50 text-white px-4 py-2 rounded-full font-sans text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 backdrop-blur-md transition-opacity duration-300 transform scale-90 group-hover:scale-100">Click để xem</span>
                        </div>
                        <img 
                          src={event.imageUrl} 
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                        />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Empty space for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10 cursor-pointer"
          >
            <motion.button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50 p-2 bg-white/10 rounded-full hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedEvent(null);
              }}
            >
              <X className="h-6 w-6" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#1a0f1c] rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-full md:w-3/5 h-[40vh] md:h-[80vh] relative bg-black flex items-center justify-center">
                <img 
                  src={selectedEvent.imageUrl} 
                  alt={selectedEvent.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-[#1a0f1c] text-white overflow-y-auto">
                <Heart className="w-8 h-8 text-love-400 mb-6 opacity-80 shrink-0" />
                <span className="font-mono text-love-300 text-sm tracking-widest uppercase mb-2 shrink-0">{selectedEvent.date}</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight font-light shrink-0">{selectedEvent.title}</h3>
                
                <div className="w-12 h-[1px] bg-love-500/50 mb-8 shrink-0" />
                
                <p className="font-sans text-lg md:text-xl text-gray-300 font-light leading-relaxed whitespace-pre-line">
                  {selectedEvent.desc}
                </p>
                
                <div className="mt-8 pt-8 shrink-0">
                  <p className="font-cursive text-3xl text-love-300/80">Thương em nhiều,</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
