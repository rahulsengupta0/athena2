import React, { useEffect } from "react";

// Adjust the import paths if not using aliasing like @/
import Curve from "./components/Curve";
import Ready from "./components/Ready";
import Heroservices from "./components/Heroservices";
import Process from "./components/Process";
import Expectations from "./components/Expectations";
// import Capibilyties from "./components/Capibilyties";
// import Archive from "./components/Archive";

const Services = () => {
	useEffect(() => {
		const initScroll = async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		};
		initScroll();
	}, []);

	return (
		<Curve backgroundColor="#f1f1f1">
			<Heroservices />
			<Process />
			{/* <Capibilyties /> */}
			{/* <Archive /> */}
			<Expectations />
			<Ready />
		</Curve>
	);
};

export default Services;
