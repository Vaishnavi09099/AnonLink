"use client";

import { motion } from "motion/react";
import {
  Zap,
  Shield,
  Globe,
  MessageCircle,
  Sparkles,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Pairing",
    desc: "Connect instantly with a random user in seconds. Skip anytime with a single click.",
  },
  {
    icon: Shield,
    title: "Anonymous Chat",
    desc: "No signup, no personal details — just pure anonymous conversations.",
  },
  {
    icon: Globe,
    title: "Global Users",
    desc: "Meet random people from different countries in real time.",
  },
  {
    icon: MessageCircle,
    title: "Text & Video Chat",
    desc: "Switch smoothly between text and video during any conversation.",
  },
  {
  icon: Sparkles,
  title: "Random Matching",
  desc: "Get paired instantly with a random user using real-time matchmaking.",
},
  {
    icon: Lock,
    title: "Safe Environment",
    desc: "Basic moderation and reporting system to keep chats safe.",
  },

];

export default function Features() {
  return (
    <motion.section   initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.8 }} className="relative py-32 px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white">
            Built for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              real
            </span>{" "}
            conversations
          </h2>

          <p className="mt-5 text-gray-400 text-lg">
            Everything you need to meet someone new — nothing that gives you away.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#07112B]/70
                backdrop-blur-xl
                p-6
                transition-all
                duration-300
                hover:border-cyan-400/50
                "
              >

                {/* Hover White Glow */}
                <div
                  className="
                  absolute
                  -top-20
                  -right-20
                  w-52
                  h-52
                  rounded-full
                  bg-white/20
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                    w-10
                    h-10
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-cyan-400
                    to-purple-500
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-400 leading-5">
                    {item.desc}
                  </p>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </motion.section>
  );
}