import { motion } from "framer-motion";
import { backgroundAbout } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
  return (
    <section className="w-full relative overflow-hidden bg-background padding-y">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <BackgroundImg src={backgroundAbout} />
      </div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-20 px-6 sm:px-4">
        {/* About Intro */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Left text */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-3xl md:text-4xl font-bold font-NeueMontreal text-secondry">
              We are <span className="text-primary">Athena LMS</span>
            </h3>
            <p className="paragraph font-NeueMontreal text-secondry leading-relaxed">
              Athena LMS transforms the way teams learn, share, and grow.  
              We combine design, interactivity, and deep insights to empower 
              businesses with impactful learning journeys that win hearts and minds.
            </p>
            <p className="paragraph font-NeueMontreal text-secondry leading-relaxed">
              Our philosophy is simple: knowledge should be immersive, intuitive, 
              and inspiring. That's why we built Athena — to help businesses 
              educate with elegance and scale with confidence.
            </p>
          </div>

          {/* Right visual block */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 rounded-2xl shadow-xl overflow-hidden"
          >
            <BackgroundImg src={backgroundAbout} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}