"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { clientsItem } from "@/constants";
import { Button, Ratings } from "@/components";

export default function Clients() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % clientsItem.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) =>
      prev === 0 ? clientsItem.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-NeueMontreal text-gray-900 mb-12"
        >
          What our clients say
        </motion.h1>

        {/* Review Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={clientsItem[activeIndex].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex flex-col items-center gap-8"
            >
              {/* Client Image */}
              <div className="w-[120px] h-[120px] relative">
                <Image
                  src={clientsItem[activeIndex].src}
                  alt={clientsItem[activeIndex].name}
                  className="rounded-full object-cover shadow-lg"
                  fill
                />
              </div>

              {/* Review Text */}
              <p className="max-w-3xl text-lg md:text-xl text-gray-700 leading-relaxed italic">
                “{clientsItem[activeIndex].review}”
              </p>

              {/* Client Info */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {clientsItem[activeIndex].name}
                </h3>
                <span className="text-sm text-gray-500">
                  {clientsItem[activeIndex].title}
                </span>
                <a
                  href={clientsItem[activeIndex].href}
                  target="_blank"
                  className="text-blue-600 hover:underline text-sm mt-1"
                >
                  {clientsItem[activeIndex].website}
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-6 mt-6">
                {clientsItem[activeIndex].links.map((link) => (
                  <Button key={link.id} href={link.href} title={link.title} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <button
              onClick={prevReview}
              className="p-3 bg-white shadow-md rounded-full hover:bg-gray-100"
            >
              ◀
            </button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <button
              onClick={nextReview}
              className="p-3 bg-white shadow-md rounded-full hover:bg-gray-100"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 mt-10">
          {clientsItem.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-all ${
                activeIndex === index
                  ? "border-blue-500 scale-110"
                  : "border-gray-200 opacity-70"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={item.src}
                alt={item.name}
                width={56}
                height={56}
                className="object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* Ratings */}
        <div className="mt-16">
          <Ratings />
        </div>
      </div>
    </section>
  );
}
