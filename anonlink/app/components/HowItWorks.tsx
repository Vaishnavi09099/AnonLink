

"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Connect instantly",
    desc: "Click the connect button to join the matchmaking queue.",
  },
  {
    number: "02",
    title: "Get paired in real time",
    desc: "Our system matches you with another available user using Socket.IO.",
  },
  {
    number: "03",
    title: "Start chatting",
    desc: "Begin a video/text session instantly via ZegoCloud.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <h2 className="text-5xl font-bold text-white leading-tight">
            Single tap.
            <br />
            One stranger.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Zero history.
            </span>
          </h2>

          <p className="mt-5 text-gray-400 text-lg leading-8 max-w-xl">
            We don't store conversations. We don't ask who you are.
            The moment you leave, the link dissolves.
          </p>
        </motion.div>

        {/* Right Side */}

        <div className="flex flex-col gap-7">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-[#07112B]/70
              backdrop-blur-xl
              px-8
              py-5
              transition-all
              duration-300
              hover:border-cyan-400/50
              "
            >

              {/* Hover Glow */}

              <div
                className="
                absolute
                -top-16
                -right-16
                w-44
                h-44
                rounded-full
                bg-white/15
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                "
              />

              <div className="relative flex gap-6 items-start z-10">

                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {step.number}
                </h1>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-gray-400 text-md leading-6">
                    {step.desc}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}