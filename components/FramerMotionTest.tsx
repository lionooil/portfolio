'use client'
import { motion } from 'framer-motion';
import Image from "next/image";

const FramerMotionTest = () => {
  return (
      <motion.div   initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }}>
      <div className="flex">
      <Image
        src="/thumbnail/tonkatsu.jpg"
        alt="Header icon"
        className="dark:invert"
        width={300}
        height={24}
        style={{
          margin: "auto", padding: "0px 8px"
}}
        priority
      />
      <Image
        src="/thumbnail/yuri-interview.jpg"
        alt="Header icon"
        className="dark:invert"
        width={300}
        height={24}
        style={{
          margin: "auto", padding: "0px 8px"
}}
        priority
      /></div>
      </motion.div>
  )
}

export default FramerMotionTest;
