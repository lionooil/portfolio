'use client'
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

const WorksMotionF = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.4, delay: 0.5 }} viewport={{ once: true }}>
    <div className="flex my-16 place-content-around">
    <Link href="/">
    <Image
      src="/thumbnail/tech.jpg"
      alt="Header icon"
      className="dark:invert shadow"
      width={400}
      height={24}
      style={{
        margin: "auto"
}}
      priority
    /></Link>
    <Link href="/">
    <Image
      src="/thumbnail/canada.jpg"
      alt="Header icon"
      className="dark:invert shadow"
      width={400}
      height={24}
      style={{
        margin: "auto"
}}
      priority
    /></Link>
    <Link href="/">
    <Image
      src="/thumbnail/portfolio.jpg"
      alt="Header icon"
      className="dark:invert shadow"
      width={400}
      height={24}
      style={{
        margin: "auto"
}}
      priority
    /></Link></div></motion.div>
  )
}

export default WorksMotionF;
