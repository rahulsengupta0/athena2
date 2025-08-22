import Image from "next/image";
import { Ratings } from "@/components";
import { aboutPartberItems } from "@/constants";
import { motion } from "framer-motion";

export default function Principles() {
	return (
		<section className="w-full bg-gradient-to-b from-[#f9fafb] to-[#f3f4f6] py-16">
			<div className="text-center px-6">
				<h1 className="text-3xl md:text-4xl font-NeueMontreal font-medium text-secondry leading-snug">
					Trusted by forward-thinking teams
					<br />
					to scale learning effortlessly
				</h1>
			</div>

			<div className="w-full border-t border-[#e5e7eb] mt-12">
				<div className="flex justify-center flex-wrap gap-8 pt-12">
					{aboutPartberItems.map((item, index) => (
						<motion.div
							key={item.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="w-[320px] bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition rounded-2xl p-6 flex flex-col items-center text-center"
						>
							<Image
								src={item.src}
								alt={item.title}
								width={70}
								height={70}
								className="mb-6"
							/>
							<p className="text-lg font-semibold text-secondry underline">
								{item.title}
							</p>
							<p className="text-sm text-gray-600 mt-3">
								{item.para.length > 80 ? item.para.slice(0, 80) + "..." : item.para}
							</p>
						</motion.div>
					))}
				</div>
			</div>

			<div className="px-6 mt-16">
				<Ratings />
			</div>
		</section>
	);
}
