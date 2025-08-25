import React, { useEffect } from "react";

// Import components from relative paths instead of module aliases
import Heroworkiz from "./components/Heroworkiz";
import Aboutworkiz from "./components/Aboutworkiz";
import Chelenge from "./components/Cheleng";
import Result from "./components/Result";
import Works from "./components/Works";
import Credit from "./components/Credit";
import VideoWorkiz from "./components/VideoWorkiz";
import Curve from "./components/Curve";
import Ready from "./components/Ready";

const Work = () => {
	useEffect(() => {
		const initScroll = async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		};
		initScroll();
	}, []);

	return (
		<Curve backgroundColor="#f1f1f1">
			<Heroworkiz />
			<Aboutworkiz />
			<Chelenge />
			<VideoWorkiz />
			<Result />
			<Credit />
			<Works />
			<Ready />
		</Curve>
	);
};

export default Work;
