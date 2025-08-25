import React, { useEffect } from "react";

// Replace module alias imports with relative paths
import Curve from "./components/Curve";
import Heroinsights from "./components/Heroinsights";

const Insights = () => {
	useEffect(() => {
		const initScroll = async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		};
		initScroll();
	}, []);

	return (
		<Curve backgroundColor="#f1f1f1">
			<Heroinsights />
		</Curve>
	);
};

export default Insights;
