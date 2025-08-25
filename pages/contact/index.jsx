import React, { useEffect } from "react";

// Replace alias imports with relative paths
import Curve from "./components/Curve";
import Herocontact from "./components/Herocontact";
import Form from "./components/Form";
import Socials from "./components/Socials";

const Contact = () => {
	useEffect(() => {
		const initScroll = async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		};
		initScroll();
	}, []);

	return (
		<Curve backgroundColor="#f1f1f1">
			<Herocontact />
			<Form />
			<Socials />
		</Curve>
	);
};

export default Contact;
