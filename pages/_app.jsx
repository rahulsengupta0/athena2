import "@/styles/globals.css";
import { Footer, Navbar } from "@/components";
import { AnimatePresence } from "framer-motion";
import FloatingChatbot from "./FloatingChatbot";

export default function App({ Component, pageProps, router }) {
	return (
		<>
			<Navbar />
			<AnimatePresence mode="wait">
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
			<FloatingChatbot />
			<Footer />
		</>
	);
}
