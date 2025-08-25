import React, { useEffect } from "react";

// Replace alias imports with actual relative paths as needed
import Curve from "./components/Curve";
import Ready from "./components/Ready";
import Heroabout from "./components/Heroabout";
import Aboutabout from "./components/Aboutabout";
import Team from "./components/Team";
import Principles from "./components/Principles";
import Insights from "./components/Insights";
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
