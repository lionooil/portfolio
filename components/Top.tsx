'use client'
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

import ProgressBar from '@/../components/ProgressBar';
import Wavify from '@/../components/Wavify';
import "@/../styles/BubbleFlow.css";
import "@/../js/BubbleFlow.js";
import "@/../styles/MouseSparkle.css";
import "@/../js/MouseSparkle.js";

const Top = () => {
  return (
<div className="h-screen mx-auto flex flex-col">
<canvas id="canvas-bubble" className="absolute size-full"></canvas>
<canvas id = "canvas-mouse-sparkle" className="absolute"></canvas>
<motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}  transition={{ duration: 1, delay: 1 }} viewport={{ once: true }}  className="inset-0 m-auto text-8xl text-center font-impact z-10">
<h1>WELCOME TO LIOS&#39;s PORTFOLIO!!</h1>
</motion.div>
<ProgressBar />
<p className="text-center z-10 mt-auto mb-8">SCROLL DOWN</p>
<Image
  src="/icons/arrow-purple-icon.svg"
  alt="Header icon"
  className="dark:invert animate-bounce rounded-full z-10 mx-auto"
  width={100}
  height={24}
  priority
/>
<Wavify />
  </div>
)
}

export default Top;
