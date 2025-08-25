import React, { useEffect } from "react";

// Replace alias imports with actual relative paths as needed
import Curve from "@/components/Curve/Curve.jsx"; 
import Ready from "@/components/Ready";
import Heroabout from "@/container";
import Aboutabout from "@/container";
import Team from "@/container";
import Principles from "@/container";
import Insights from "@/container";
// import Partners from "./components/Partners"; // Uncomment if needed

const About = () => {
	useEffect(() => {
		const initScroll = async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		};
		initScroll();
	}, []);

	return (
		<Curve backgroundColor="#f1f1f1">
			<Heroabout />
			<Aboutabout />
			<Team />
			<Principles />
			{/* <Partners /> */}
			<Insights />
			<Ready />
		</Curve>
	);
};

export default About;
