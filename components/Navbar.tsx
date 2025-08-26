import Link from "next/link";
import { useState } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const isWhiteTheme = pathname === "/" || pathname === "/services";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous) {
      setHidden(true);  // Hide navbar on scroll down
    } else {
      setHidden(false); // Show navbar on scroll up
    }
  });

  return (
    <>
      <motion.nav
        variants={navVariants}
        className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 flex items-center justify-between sm:hidden xm:hidden"
        animate={hidden ? "hidden" : "visible"}
        style={{
          backgroundColor: "#6495ED",
          borderRadius: "0 0 25px 25px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Logo */}
        <div className="w-1/2">
          <Link href="/">
            <h1 className={`text-2xl font-extrabold font-sans uppercase tracking-wide ${
                isWhiteTheme ? "text-white" : "text-black"
              }`}
            >
              Athena <span className={isWhiteTheme ? "text-white" : "text-black"}>LMS</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links + Login */}
        <div className="w-1/2 flex items-center justify-end space-x-6">
          {navbarItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`fit-content paragraph font-bold font-NeueMontreal capitalize flex flex-col hover ${
                item.id === 5 ? "ml-auto" : "" /* keep your conditional styling */
              } ${isWhiteTheme ? "text-white" : "text-black"}`}
            >
              <TextHover titile1={item.title} titile2={item.title} />
            </Link>
          ))}

          {/* Add Login Button */}
          <a
            href="https://lmsathena.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded bg-white font-semibold cursor-pointer ${
              isWhiteTheme ? "text-blue-600" : "text-blue-800"
            } hover:bg-gray-200 transition`}
          >
            Login
          </a>
        </div>
      </motion.nav>
      <MobileNav />
    </>
  );
}
