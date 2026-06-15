'use client'

import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer initial = {{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}} className="w-full border-t border-white/10 bg-[#09071f]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-1 text-gray-400">
          <img
            src="/anony_logo.png"
            alt="AnonLink"
            className="h-8 object-contain"
          />

          <p className="text-sm">
            © 2026 <span className="text-white font-medium">AnonLink.</span>{" "}
            The mask stays on.
          </p>
        </div>

       
      </div>
    </motion.footer>
  );
};

export default Footer;