// NAVBAR VARIANTS
export const navVariants = {
    hidden: { y: "-100%" },
    vissible: { y: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 } },
};

export const navVariants1 = {
    hidden: { y: "-100%" },
    vissible: { y: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 } },
};

// FOOTER
export const footerVarient = {
    hidden: { y: 150, opacity: 0 },
    vissible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
};

// ANIMATION
export const animation = {
    initial: { y: "100%" },
    visible: {
        y: "0",
        transition: {
            duration: 0.75,
            ease: [0.33, 1, 0.68, 1],
        },
    },
};

// MENUSLIDE
export const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
        x: "calc(100% + 100px)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
};

// SLIDE
export const slide = {
    initial: { x: 80 },
    enter: (i) => ({
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.05 * i,
        },
    }),
    exit: (i) => ({
        x: 80,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.05 * i,
        },
    }),
};

// SCALE
export const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } },
};

// CURVE PATHS
let initialPath = "";
let targetPath = "";

if (typeof window !== "undefined") {
    initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight
        } Q-100 ${window.innerHeight / 2} 100 0`;

    targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight
        } Q100 ${window.innerHeight / 2} 100 0`;
}

// TEXT ANIMATION
export const text = {
    initial: { opacity: 1 },
    enter: {
        opacity: 0,
        top: -100,
        transition: {
            duration: 0.75,
            delay: 0.35,
            ease: [0.76, 0, 0.24, 1],
        },
        transitionEnd: { top: "47.5%" },
    },
    exit: {
        opacity: 1,
        top: "40%",
        transition: {
            duration: 0.5,
            delay: 0.4,
            ease: [0.33, 1, 0.68, 1],
        },
    },
};

// CURVE FUNCTION
export const curve = (initialPath, targetPath) => {
    return {
        initial: {
            d: initialPath,
        },
        enter: {
            d: targetPath,
            transition: {
                duration: 0.75,
                delay: 0.35,
                ease: [0.76, 0, 0.24, 1],
            },
        },
        exit: {
            d: initialPath,
            transition: {
                duration: 0.75,
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };
};

// TRANSLATE
export const translate = {
    initial: { top: "-300px" },
    enter: {
        top: "-100vh",
        transition: {
            duration: 0.75,
            delay: 0.35,
            ease: [0.76, 0, 0.24, 1],
        },
        transitionEnd: { top: "100vh" },
    },
    exit: {
        top: "-300px",
        transition: {
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
        },
    },
};

// OPACITY
export const opacity = {
    initial: { opacity: 0 },
    enter: {
        opacity: 0.75,
        transition: { duration: 1, delay: 0.2 },
    },
};

// SLIDE UP
export const slideUp = {
    initial: { top: 0 },
    exit: {
        top: "-100vh",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.2,
        },
    },
};
