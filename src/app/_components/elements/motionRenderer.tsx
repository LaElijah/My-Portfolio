"use client";
import { motion } from "framer-motion";

export default function MotionRenderer({ children, ...options }: any) {
  return <motion.div {...options}>{children}</motion.div>;
}
