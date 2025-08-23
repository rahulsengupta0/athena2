"use client";
import { useState } from "react";
import { Marquee } from "@/components";
import { TextHover } from "@/animation";
import { expectationsItems as originalExpectationsItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

const splashImgs = [
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80",
];

const expectationsItems = originalExpectationsItems.map((item, i) => ({
  ...item,
  img: splashImgs[i % splashImgs.length],
}));

export default function Expectations() {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  const handleButtonClick = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const hoveredItem = expectationsItems.find((item) => item.id === hoveredItemId);

  return (
    <section className="w-full py-10 px-6 rounded-t-[20px]" style={{ backgroundColor: "#005A9C" }}>
      <div className="mb-10">
        <Marquee
          title="why us other"
          className="pb-10 text-[130px] leading-[80px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px]"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left side with image and soft gradient/frame */}
        <div className="lg:w-1/2 w-full flex justify-center items-center relative rounded-xl overflow-hidden shadow-lg">
          {hoveredItem && hoveredItem.img ? (
            <motion.div
              key={hoveredItem.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-full max-w-md h-72 rounded-xl overflow-hidden"
            >
              <img
                src={hoveredItem.img}
                alt={hoveredItem.subTitle1}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
                style={{ pointerEvents: "none" }}
              />
              {/* Soft gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-xl pointer-events-none" />
              {/* Subtle border/frame */}
              <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
            </motion.div>
          ) : (
            <div className="w-full max-w-md h-72 rounded-xl bg-gradient-to-t from-[#3b82f6]/30 to-transparent border border-white/20" />
          )}
        </div>

        {/* Right side grid of cards */}
        <div className="lg:w-1/2 w-full grid grid-cols-3 grid-rows-2 gap-6">
          {expectationsItems.map((item) => {
            // Icons based on item id or title
            const iconsMap: Record<number, string> = {
              1: "📞",
              2: "🌍",
              3: "💡",
              4: "🎯",
              5: "🔍",
              6: "⏳",
            };
            const icon = iconsMap[item.id] || "📦";

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                whileHover={{ scale: 1.03 }}
                className="relative bg-gradient-to-br from-blue-600 to-blue-500 rounded-[20px] p-6 shadow-lg cursor-pointer flex flex-col justify-between border border-transparent hover:border-blue-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-4xl font-bold text-white select-none">{item.title1}</div>
                  <h3 className="text-lg font-semibold text-white font-NeueMontreal select-none">{item.subTitle1}</h3>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <button className="text-sm lowercase text-white font-light flex items-center gap-1">
                    <span>→</span>
                    <TextHover titile1={item.subTitle1} titile2={item.subTitle1} />
                  </button>
                  <button
                    onClick={() => handleButtonClick(item.id)}
                    className="uppercase text-white font-light text-sm hover:underline"
                  >
                    {openItemId === item.id ? "hide" : <TextHover titile1={item.btn} titile2={item.btn} />}
                  </button>
                </div>

                <AnimatePresence>
                  {openItemId === item.id && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                      }}
                      className="mt-4 pt-4 border-t border-white/30 text-white text-sm"
                    >
                      {item.para1.replace("Comunication", "Communication").replace("Limited Amount of Client", "Limited Number of Clients")}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Icon in bottom-left corner */}
                <div className="absolute bottom-4 left-4 text-2xl opacity-30 select-none pointer-events-none">{icon}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .grid-cols-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            grid-template-rows: auto auto !important;
          }
        }
        @media (max-width: 640px) {
          section > div.flex > div:first-child {
            width: 100% !important;
          }
          section > div.flex > div:last-child {
            width: 100% !important;
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
