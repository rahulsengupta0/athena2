"use client";
import { useRef } from "react";
import { ProjectCard, Tags } from "@/components";
import { presentationProjectItem } from "@/constants";

export default function Projects() {
	const container = useRef(null);
	return (
		<div className="w-full" ref={container}>
			<div className="w-full flex flex-col items-center justify-center bg-[#6495ED]">
				<div
					data-scroll
					data-scroll-speed="-.2"
					className="bg-[#005A9C] w-[75%] py-[20px] rounded-t-[10px]"
				/>
				<div
					className="bg-[#004687] relative z-20 w-[90%] py-[20px] rounded-t-[10px]"
					data-scroll
					data-scroll-speed="-.1"
				/>
			</div>
			<section className="w-full relative z-30 padding-y rounded-t-[20px] bg-background">
				<div>
					<h2 className="sub-heading font-normal padding-x font-NeueMontreal text-secondry">
						Discover how Athena sets itself apart in the learning management landscape.
						<br className="sm:hidden xm:hidden" />
						that people care about.
					</h2>
				</div>
				<div className="w-full flex justify-between gap-y-[50px] padding-x padding-y flex-wrap">
					{presentationProjectItem.map((item) => (
						<div className="w-[49%] sm:w-full xm:w-full" key={item.id}>
							<div className="flex gap-x-[10px] items-center pb-[10px]">
								<span className="w-[10px] h-[10px] rounded-full bg-secondry" />
								<h1 className="small-text uppercase font-medium font-NeueMontreal text-secondry">
									{item.title}
								</h1>
							</div>
							<ProjectCard item={item} />
							<div className="flex flex-wrap items-center gap-[10px] mt-[20px]">
								{item.links.map((link) => (
									<Tags
										bgcolor="#212121"
										item={link}
										key={link.id}
										className="hover:text-white"
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
