"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="top"
      className="h-screen flex flex-col justify-center items-center py-20 text-center"
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Simplify LeetCode
        <span className="text-[#FFA116]"> Problems</span>
      </motion.h1>
      <motion.p
        className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        AI-powered explanations and hints at your fingertips
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button className="bg-[#FFA116] text-black hover:bg-[#FFB84D] text-lg px-6 py-3">
          Launching Soon
        </Button>
      </motion.div>
    </section>
  );
}
