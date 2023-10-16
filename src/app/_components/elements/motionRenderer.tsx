"use client";
import { motion, AnimatePresence, AnimatePresenceProps } from "framer-motion";

type CommonProps = any;

type MotionRendererProps = CommonProps & {
  children: JSX.Element | JSX.Element[];
  animatePresence?: AnimatePresenceProps;
};
export default function MotionRenderer({
  children,
  animatePresence,
  ...options
}: MotionRendererProps) {
  if (animatePresence) {
    return (
      <AnimatePresence {...animatePresence}>
        <motion.div {...options}>{children}</motion.div>
      </AnimatePresence>
    );
  } else {
    return <motion.div {...options}>{children}</motion.div>;
  }
}
