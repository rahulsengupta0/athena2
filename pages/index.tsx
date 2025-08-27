"use client";
import { useEffect } from "react";
import { Curve, Marquee, Ready } from "@/components";
import { About, Clients, Features, Hero, Projects, VideoHome } from "@/container";
import { Feather } from "lucide-react";

export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<Hero />
				<div
    className="w-full z-10 relative rounded-t-[20px] padding-y"
    style={{ backgroundColor: "#005A9C" }}
>
    {/* <Marquee
  title="I AM ATHENA"
  className="pb-[20px] lg:pb-[16px] md:pb-[12px] sm:pb-[10px] xm:pb-[8px] text-[240px] leading-[150px] lg:text-[180px] lg:leading-[110px] md:text-[140px] md:leading-[80px] sm:text-[110px] sm:leading-[70px] xm:text-[70px] xm:leading-[40px]"
/> */}

</div>

				<About />
				{/* <VideoHome /> */}
				{/* <Projects /> */}
				<Features/>
				{/* <Clients /> */}
				<Ready />
			</Curve>
		</>
	);
}
