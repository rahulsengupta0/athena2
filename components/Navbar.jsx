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

  // ✅ White theme only for Home and Features page
  const isWhiteTheme = pathname === "/" || pathname === "/services";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous) {
      setHidden(true);  // Hide navbar on scroll down
    } else {
      setHidden(false); // Show navbar on scroll up or no movement
    }
  });

  return (
    <>
      <motion.nav
        variants={navVariants}
        className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 flex items-center justify-between sm:hidden xm:hidden md:hidden"
        animate={hidden ? "hidden" : "vissible"}
        style={{
          backgroundColor: "#6495ED",
          borderRadius: "0px 0px 25px 25px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* ✅ Logo changes color dynamically */}
        <div className="w-[50%]">
          <Link href={"/"}>
            <h1
              className={`text-2xl font-extrabold font-sans uppercase tracking-wide ${
                isWhiteTheme ? "text-white" : "text-black"
              }`}
            >
              Athena{" "}
              <span className={isWhiteTheme ? "text-white" : "text-black"}>
                LMS
              </span>
            </h1>
          </Link>
        </div>

        {/* ✅ Nav links also change color */}
        <div className="flex gap-x-[20px] w-[50%]">
          {navbarItems.map((item) => (
            <Link
              key={item.id}
              className={`w-fit paragraph font-bold font-NeueMontreal capitalize flex flex-col hover ${
                item.id === 5 && "ml-auto"
              } ${isWhiteTheme ? "text-white" : "text-black"}`}
              href={item.href}
            >
              <TextHover titile1={item.title} titile2={item.title} />
            </Link>
          ))}
        </div>
      </motion.nav>
      <MobileNav />
    </>
  );
}