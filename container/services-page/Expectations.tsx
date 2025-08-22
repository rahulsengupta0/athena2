"use client";
import { useState } from "react";
import { Marquee } from "@/components";
import { TextHover } from "@/animation";
import { expectationsItems as originalExpectationsItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

const splashImgs = [
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=400&q=80",
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
    <section
      className="w-full padding-y rounded-t-[20px]"
      style={{ backgroundColor: "#005A9C" }}
    >
      <div
        className="w-full z-10 relative rounded-t-[20px]"
        style={{ backgroundColor: "#005A9C" }}
      >
        <Marquee
          title="why us other"
          className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[30px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
        />
      </div>
      <div className="w-full padding-x py-[20px] flex flex-row sm:flex-col xm:flex-col gap-[20px]">
        {/* Left column: heading + preview */}
        <div className="w-1/2 sm:w-full xm:w-full flex flex-col items-center justify-start pt-[32px] relative">
          <h3 className="paragraph font-medium text-white font-NeueMontreal mb-6 text-center sm:text-left xm:text-left">
            What you can expect?
          </h3>
          <AnimatePresence mode="wait">
  {hoveredItem && hoveredItem.img && (
    <motion.div
      key={hoveredItem.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="w-96 h-72 bg-white/10 rounded-xl shadow-lg flex items-center justify-center"
      style={{ willChange: "transform" }}
    >
      <img
        src={hoveredItem.img}
        alt={hoveredItem.subTitle1}
        className="object-cover w-full h-full rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
        style={{ pointerEvents: "none" }}
      />
    </motion.div>
  )}
</AnimatePresence>

        </div>

        {/* Right column: grid of cards */}
        <div className="w-1/2 sm:w-full xm:w-full grid grid-cols-3 gap-[20px]">
          {expectationsItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-[20px]"
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <div className="bg-[#1E90FF] w-full rounded-[20px] px-[30px] py-[20px] cursor-pointer transition duration-200 hover:scale-105 min-h-[220px] flex flex-col">
                <div className="flex gap-x-[10px] items-center pb-[10px] mb-[60px]">
                  <h1 className="sub-heading font-normal font-NeueMontreal text-white">
                    {item.title1}
                  </h1>
                </div>
                <div className="w-full flex justify-between items-center mt-auto">
                  <button className="small-text font-normal font-NeueMontreal text-white">
                    <TextHover titile1={item.subTitle1} titile2={item.subTitle1} />
                  </button>
                  <button
                    onClick={() => handleButtonClick(item.id)}
                    className="small-text uppercase font-normal font-NeueMontreal text-white"
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
                    >
                      <div className="border-t border-[#f1f1f155] pt-[20px] text-background mt-[10px]">
                        {item.para1}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
