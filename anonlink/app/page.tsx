'use client'
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { io, WebSocket } from "socket.io-client";
import { useEffect, useState } from "react";
import { Feather, Loader2 } from "lucide-react";
import VideoRoom from "./components/VideoRoom";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTASection from "./components/CTASection";
import HeroAnimation from "./components/HeroAnimation";



const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL,{
  transports:["websocket"]
})


export default function Home() {

  const [status,setStatus] = useState("idle")
  
  const [roomId,setRoomId] = useState("")

  const startChat = ()=>{
    socket.emit("start")
    setStatus("waiting")
  }
  const next = ()=>{
    socket.emit("next")
    window.location.reload();
  }
  useEffect(() => {
  socket.on("matched", ({ roomId }) => {
    setRoomId(roomId);
    setStatus("chatting");
  });

  socket.on("waiting", () => {
    setStatus("waiting");
  });

  socket.on("partner_left", () => {
    window.location.reload();
  });

  return () => {
    socket.off("matched");
    socket.off("waiting");
    socket.off("partner_left");
  };
}, []);
 

  //event and name


  return (
    <main className="min-h-screen overflow-hidden bg-[#09071f] relative">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] pointer-events-none h-[500px] rounded-full bg-purple-500/10 blur-[120px] " />
      

      <Navbar show={status!=="chatting"}/>
      <AnimatePresence>
        {status === "idle" && (<motion.section exit={{y:50,opacity:0}} initial = {{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}}  className="max-w-7xl mx-auto px-8 pt-20 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Side */}
        <div className="max-w-2xl">

         

          <h1 className="text-7xl font-bold text-white leading-tight">
            Talk to anyone.
            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Stay no one.
            </span>
          </h1>

          <p className="mt-4 text-gray-400 text-lg leading-7 max-w-xl">
            Instantly connect with random strangers from around the
            world. No signup. No profiles. No history. Just anonymous
            conversations behind the mask.
          </p>

          <div  className="flex items-center gap-6 mt-9">

            <motion.button onClick={startChat} whileHover={{scale:1.01}}  whileTap={{scale:0.97}} className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-[#090D21] font-semibold hover:scale-105 duration-300 transition-transform">
              Connect with a stranger →
            </motion.button>

           

          </div>

        

        </div>

        {/* Right Side */}

        <div className="relative mt-40 lg:mt-0 flex items-center justify-center">

         <HeroAnimation />
        </div>
         

      </motion.section>)}

      {status=="idle" && <div id="features">
        <Features />
        </div>}
      {status=="idle" && <div id="how">
        <HowItWorks />
        </div>}
     
     
      
   
      {status=="idle" && <CTASection startChat = {startChat}/>}
     

     {status === "waiting" && (
  <motion.div  className="flex flex-col justify-center items-center text-white relative z-10 min-h-screen gap-4">
    
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: "linear", duration: 1.1 }}
    >
      <Loader2 size={56} />
    </motion.div>

    <motion.p
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 1.1 }}
    >
      Matching you with someone new.....
    </motion.p>

  </motion.div>
)}
      {status==="chatting" && roomId && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.7}}>

          
         <motion.button onClick={next}
    className="absolute top-4 right-4 z-[9999] bg-gradient-to-r from-cyan-400 to-purple-500 text-[#090D21] px-4 py-1 rounded-lg text-black font-bold "
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Next
  </motion.button>
          <div className="flex-1 relative">
             <VideoRoom roomId={roomId}/>

          </div>
         
        </motion.div>
      )}


      </AnimatePresence>

     

      

        <Footer />

    </main>
  );
}