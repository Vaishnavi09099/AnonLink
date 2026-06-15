"use client";

import { motion } from "motion/react";
import Link from "next/link";


export default function Navbar({show}:{show:Boolean}) {
  if(!show){
    return null;
  }
  return (
    
    <motion.nav initial = {{y:-50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}} className="fixed top-0 left-0 w-full z-50 h-15 backdrop-blur-md bg-black/10 border-b border-white/10">
      <div className=" max-w-7xl mx-auto px-8 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-1">
          <img
            src="/anony_logo.png"
            alt="AnonLink"
            className="w-10 h-11 "
          />

          <h1 className="text-xl font-bold tracking-tighter text-white">
            Anon
            <span className="text-cyan-400">Link</span>
          </h1>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-15 text-gray-300 font-medium">

          <Link
            href="#features"
            className="hover:text-cyan-400 transition"
          >
            Features
          </Link>

          <Link
            href="#how"
            className="hover:text-cyan-400 transition"
          >
            How it works
          </Link>

          

        </div>

      

      </div>
    </motion.nav>
  );
}