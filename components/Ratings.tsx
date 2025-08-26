import Link from "next/link";
import { motion } from "framer-motion";
import { Rounded } from "@/components";

export default function Ratings() {
  return (
    <div className="w-full flex justify-between sm:flex-col xm:flex-col gap-8 mb-32">
      {/* Athena LMS Brand Showcase */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ 
          opacity: 1, 
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" }
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-[49.5%] sm:w-full xm:w-full h-[70vh] sm:h-[60vh] xm:h-[50vh] relative group rounded-3xl overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 to-slate-900">
          {/* Animated floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${5 + Math.random() * 10}px`,
                height: `${5 + Math.random() * 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                transition: {
                  duration: 5 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          ))}
          
          {/* Text Content with Glow */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ 
              scale: 1, 
              opacity: 1,
              transition: { 
                duration: 0.8,
                delay: 0.3
              }
            }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
          >
            <h2 className="text-4xl sm:text-3xl xm:text-2xl font-bold text-white mb-4">
              Athena Learning Platform
            </h2>
            <p className="text-lg sm:text-base text-sky-200 max-w-md">
              Revolutionizing education through adaptive learning technologies and data-driven insights
            </p>
            <motion.div 
              className="absolute inset-0 rounded-full bg-sky-500/20 blur-xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.div>
          
          {/* Stats Overlay */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.5 }
              }}
              className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg"
            >
              <p className="text-sm font-medium text-slate-700">Trusted by</p>
              <p className="text-2xl font-bold text-slate-900"> Institutions</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.7 }
              }}
              className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg"
            >
              <p className="text-sm font-medium text-slate-700">Serving</p>
              <p className="text-2xl font-bold text-slate-900">500+ Learners</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-6">
        {/* Student Success Stories */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true }}
          className="w-full h-[34vh] sm:h-[28vh] xm:h-[24vh] relative group rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Content Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 flex items-end">
            {/* Testimonial Quote */}
            <div className="p-8 text-white">
              <svg 
                className="w-8 h-8 mb-4 text-purple-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg font-medium mb-4">
  {"Athena transformed how our students engage with complex topics. The adaptive learning paths helped us improve completion rates by 40%."}
</p>

              <p className="text-sm font-light text-purple-200">
                — Sarah Johnson, Dean of Digital Learning
              </p>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-6 right-6 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    transition: { 
                      delay: 0.3 + i * 0.1,
                      type: "spring",
                      stiffness: 500
                    }
                  }}
                >
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute left-6 bottom-6"
          >
            <Link href="/success-stories">
              <Rounded
                backgroundColor="bg-white"
                className="group-hover:bg-purple-100 transition-colors"
              >
                <p className="z-10 px-5 py-2 text-sm font-medium text-slate-800 group-hover:text-purple-800 flex items-center gap-2">
                  Read Success Stories
                  <motion.span
                    animate={{
                      x: [0, 4, 0],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity
                      }
                    }}
                  >
                    →
                  </motion.span>
                </p>
              </Rounded>
            </Link>
          </motion.div>
        </motion.div>

        {/* Faculty Endorsements */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true }}
          className="w-full h-[34vh] sm:h-[28vh] xm:h-[24vh] relative group rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Content Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900 to-blue-800 flex items-end">
            <div className="p-8 text-white">
              <svg 
                className="w-8 h-8 mb-4 text-sky-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path d="M12 14l-9-5 9-5 9 5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <p className="text-lg font-medium mb-4">
  {"The analytics dashboard gives me real-time insights to personalize instruction like never before."}
</p>

              <p className="text-sm font-light text-sky-200">
                — Prof. Michael Chen, Computer Science Department
              </p>
            </div>
            
            {/* Certification Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ 
                scale: 1,
                transition: { 
                  delay: 0.6,
                  type: "spring"
                }
              }}
              className="absolute top-6 right-6 bg-white/90 text-sky-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              EDU-TECH APPROVED
            </motion.div>
          </div>
          
          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute left-6 bottom-6"
          >
            <Link href="/faculty">
              <Rounded
                backgroundColor="bg-white"
                className="group-hover:bg-sky-100 transition-colors"
              >
                <p className="z-10 px-5 py-2 text-sm font-medium text-slate-800 group-hover:text-sky-800 flex items-center gap-2">
                  View Faculty Testimonials
                  <motion.span
                    animate={{
                      x: [0, 4, 0],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity
                      }
                    }}
                  >
                    →
                  </motion.span>
                </p>
              </Rounded>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}