import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
	return (
		<section
			className="relative w-full h-screen sm:mb-[-10px] xm:mb-[-10px] overflow-hidden"
			data-scroll
			data-scroll-speed="-.3"
		>
			{/* Background Video */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
			>
				<source src="/interactive.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Blue overlay with gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-blue-900/40 z-0" />

			{/* Hero Content */}
			<div className="relative z-10 w-full h-full flex flex-col justify-between">
				<div />
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
					<div className="w-full flex justify-between gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
						<div>
							<h1 className="heading tracking-[-1.3px] text-white font-semibold font-FoundersGrotesk uppercase">
								Transform Your Learning <br />
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 1.5,
										}}
										className="leading-[130px]"
									>
										<img
											src="/AthenaDash.png"
											alt="Athena Logo"
											className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[5px]"
										/>
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-white font-semibold font-FoundersGrotesk uppercase">
										Skill Enhancing
									</h1>
								</div>
								Experience
							</h1>
						</div>
					</div>

					<div className="w-full flex flex-col h-[22vh] border-t border-white/40 py-[20px] sm:mb-[80px] xm:mb-[80px] gap-[30px]">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[50%] xm:w-full sm:w-full">
								<p className="paragraph font-NeueMontreal text-white/90">
									For students, educators, and lifelong learners
								</p>
							</div>
							<div className="w-[50%] xm:w-full sm:w-full flex justify-between xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
								<div>
									<p className="paragraph font-NeueMontreal text-white/90">
										From first lesson to mastery
									</p>
								</div>
								<div className="flex items-center gap-[5px] group">
									<div className="rounded-[50px] border border-white/60 group-hover:bg-white py-[3px] px-[12px] cursor-pointer transition-all duration-300">
										<a
											href="/contact"
											className="paragraph font-NeueMontreal text-white uppercase group-hover:text-blue-900 transition-all duration-300"
										>
											Start Learning
										</a>
									</div>
									<div className="w-[33px] flex items-center justify-center h-[33px] border border-white/60 rounded-full p-[1px] group-hover:bg-white transition-all duration-300 cursor-pointer xm:hidden sm:hidden">
										<ArrowUpRight 
											size={24} 
											strokeWidth={1.25} 
											className="text-white group-hover:text-blue-900" 
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden">
							<motion.p
								initial={{ y: "-100%", opacity: 0 }}
								animate={{ y: "100%", opacity: 0.7 }}
								transition={{
									duration: 1.8,
									repeat: Infinity,
									ease: [0.3, 0.86, 0.36, 0.95],
								}}
								className="paragraph font-NeueMontreal text-white/80"
							>
								scroll down
							</motion.p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
