import { Variants } from "framer-motion";

/**
 * @param {number} [staggerChildren]
 * @param {number} [delayChildren]
 * @returns {Variants}
 */
export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren || 0.1,
      delayChildren: delayChildren || 0,
    },
  },
});

/**
 * @param {number} [delay]
 * @returns {Variants}
 */
export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: delay || 0,
    },
  },
});

/**
 * @param {"up" | "down" | "left" | "right"} direction
 * @param {string} type
 * @param {number} delay
 * @param {number} duration
 * @returns {Variants}
 */
export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * @param {number} delay
 * @param {number} duration
 * @returns {Variants}
 */
export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * @param {"up" | "down" | "left" | "right"} direction
 * @param {string} type
 * @param {number} delay
 * @param {number} duration
 * @returns {Variants}
 */
export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});