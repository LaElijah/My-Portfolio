"use client";
import { motion, AnimatePresence, AnimatePresenceProps } from "framer-motion";

type MotionRendererProps = {
  children: JSX.Element | JSX.Element[];
  animatePresence?: boolean;
  isVisible?: boolean;
} & any;

export default function MotionRenderer({
  children,
  animatePresence,
  isVisible,
  ...options
}: MotionRendererProps) {
  if (animatePresence) {
    return (
      <AnimatePresence>
        {isVisible && <motion.div {...options}>{children}</motion.div>}
      </AnimatePresence>
    );
  } else {
    return <motion.div {...options}>{children}</motion.div>;
  }
}
