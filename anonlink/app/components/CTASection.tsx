"use client";

import { motion } from "motion/react";



export default function CTASection({ startChat }: any)  {
  return (
    <section className="relative py-32 px-8 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[1100px] h-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
        relative
        max-w-4xl
        mx-auto
        overflow-hidden
        rounded-[38px]
        border
        border-cyan-400/20
        bg-[#0B0E2A]
        px-10
        py-10
        text-center
        shadow-[0_0_80px_rgba(34,211,238,0.12)]
        "
      >

        {/* Top Border Glow */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[85%] h-10 bg-cyan-400/30 blur-3xl" />

        {/* Logo */}
        <motion.img  animate={{
    y: [0, -10, 0],   // up → down → original
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
          src="/anony_logo.png"
          alt="AnonLink"
          className="w-30 mx-auto mb-8 relative z-10"
        />

        {/* Heading */}
        <h2 className="relative z-10 text-5xl font-bold text-white leading-tighter">
          Someone out there is
          <br />
          waiting to meet{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            you.
          </span>
        </h2>

        {/* Description */}
        <p className="relative z-10 mt-8 text-gray-400 text-lg leading-6 max-w-3xl mx-auto">
          The next conversation is one tap away. No name. No face.
          <br />
          Just you behind the mask.
        </p>

        {/* Button */}
        <motion.button
          onClick={startChat}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-[#090D21] font-semibold hover:scale-105 duration-300 transition-transform"
        >
          Start Chatting Now →
        </motion.button>

      </motion.div>
    </section>
  );
}