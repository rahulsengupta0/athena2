"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { footernavbarItems } from "@/constants";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNav() {
	const [toggle, setToggle] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	// Close menu when route changes
	useEffect(() => {
		const handleRouteChange = () => setToggle(false);
		window.addEventListener('popstate', handleRouteChange);
		return () => window.removeEventListener('popstate', handleRouteChange);
	}, []);

	// Detect scroll for navbar styling
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			{/* Top navbar with improved styling */}
			<div 
				className="w-full hidden justify-between items-center h-[70px] px-6 fixed top-0 z-40 sm:flex md:flex lg:hidden transition-all duration-300"
				style={{
					backgroundColor: isScrolled ? 'rgba(100, 149, 237, 0.95)' : "#6495ED",
					backdropFilter: isScrolled ? 'blur(10px)' : 'none',
					boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.15)" : "none",
				}}
			>
				<Link href="/" className="z-50">
					<h1 className="text-2xl font-extrabold font-sans uppercase tracking-wide text-white">
						Athena <span className="text-white">LMS</span>
					</h1>
				</Link>
				<HiOutlineMenuAlt4
					onClick={() => setToggle(true)}
					className="text-3xl cursor-pointer text-white transition-transform hover:scale-110"
					aria-label="Open menu"
				/>
			</div>

			{/* Spacer to prevent content from being hidden behind fixed navbar */}
			<div className="hidden sm:block md:block lg:hidden h-[70px]"></div>

			<AnimatePresence mode="wait">
				{toggle && (
					<>
						{/* Backdrop overlay */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="fixed inset-0 bg-black/50 z-40 lg:hidden"
							onClick={() => setToggle(false)}
						/>

						{/* Mobile menu */}
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ 
								type: "spring", 
								damping: 25, 
								stiffness: 200 
							}}
							className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-md min-h-screen flex flex-col bg-gradient-to-b from-[#6495ED] to-[#005A9C] shadow-2xl"
						>
							{/* Header with close button */}
							<div className="w-full flex justify-between items-center h-[70px] border-b border-white/20 px-6">
								<Link href="/" onClick={() => setToggle(false)}>
									<h1 className="text-2xl font-extrabold font-sans uppercase tracking-wide text-white">
										Athena <span className="text-white">LMS</span>
									</h1>
								</Link>
								<button 
									onClick={() => setToggle(false)}
									className="p-2 rounded-full hover:bg-white/10 transition-colors"
									aria-label="Close menu"
								>
									<IoMdClose className="text-3xl text-white" />
								</button>
							</div>

							{/* Menu items with improved spacing */}
							<nav className="flex-1 w-full px-6 py-8 overflow-y-auto">
								<ul className="h-full w-full flex flex-col gap-6">
									{footernavbarItems.map((item, index) => (
										<motion.li
											key={item.id}
											initial={{ opacity: 0, x: 20 }}
											animate={{ 
												opacity: 1, 
												x: 0,
												transition: {
													delay: index * 0.1,
													duration: 0.4
												}
											}}
											className="border-b border-white/10 last:border-b-0 pb-4 last:pb-0"
										>
											<Link
												href={item.href}
												onClick={() => setToggle(false)}
												className="text-3xl font-medium font-FoundersGrotesk uppercase tracking-wide text-white hover:text-cyan-200 transition-colors flex items-center py-3"
											>
												{item.title}
											</Link>
										</motion.li>
									))}
								</ul>
							</nav>

							{/* Footer with additional info */}
							<div className="p-6 border-t border-white/20">
								<p className="text-white/70 text-sm mb-2">Need help?</p>
								<Link 
									href="/contact" 
									className="text-white font-medium hover:text-cyan-200 transition-colors"
									onClick={() => setToggle(false)}
								>
									Contact Support
								</Link>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}