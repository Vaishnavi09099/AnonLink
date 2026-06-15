"use client";

import { motion } from "motion/react";

export default function HeroAnimation() {
  return (
    <div className="relative w-[550px] h-[550px] mt-8 flex items-center justify-center">

      {/* Pulsing Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[400px] h-[400px] rounded-full bg-cyan-300/30 blur-[90px]"
      />

      {/* Outer Orbit */}

      <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-400/20" />

      {/* Inner Orbit */}

      <div className="absolute w-[400px] h-[400px] rounded-full border border-purple-500/20" />

      {/* Orbit Dot 1 */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
      </motion.div>

      {/* Orbit Dot 2 */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        className="absolute w-[400px] h-[400px]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_20px_#a855f7]" />
      </motion.div>

      {/* Floating Logo */}

      <motion.img
        src="/anony_logo.png"
        alt="logo"
        className="relative z-20 w-[340px]"
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}