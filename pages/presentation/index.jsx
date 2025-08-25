import React, { useEffect } from "react";

// Replace these alias imports with actual relative paths if you're not using a bundler that resolves `@`
import Curve from "./components/Curve";
import Ready from "./components/Ready";
import Heropresentation from "./components/Heropresentation";
import Projectspresentation from "./components/Projectspresentation";
import Publication from "./components/Publication";

const Presentation = () => {
	useEffect(() => {
		const initScroll = async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		};
		initScroll();
	}, []);

	return (
		<Curve backgroundColor="#f1f1f1">
			<Heropresentation />
			<Projectspresentation />
			<Publication />
			<Ready />
		</Curve>
	);
};

export default Presentation;
