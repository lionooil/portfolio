'use client'
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

const WorksMotionF = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
    <div className="flex my-16 place-content-around">
    <Link href="/">
    <div className="relative group/item overflow-hidden rounded-lg shadow">
    <p className="absolute transition duration-500 opacity-0 group-hover/item:opacity-100 group-hover/item:bg-gray-600/80 size-full z-10 text-center text-white"><span className="font-bold">エンジニア向け技術ブログ</span>HTML/CSS/JavaScript/PHP/MySQL</p>
    <Image
      src="/thumbnail/tech.jpg"
      alt="Header icon"
      className="dark:invert group-hover/item:scale-125 ease-out duration-500"
      width={400}
      height={24}
      style={{
        margin: "auto"
}}
      priority
    /></div></Link>
    <Link href="/">
    <div className="relative group/item overflow-hidden rounded-lg shadow">
    <p className="absolute transition duration-500 opacity-0 group-hover/item:opacity-100 group-hover/item:bg-gray-400/50 size-full z-10 text-center"><span className="font-bold">エンジニア向け技術サイト</span>HTML/CSS/JavaScript/PHP/MySQL</p>
    <Image
      src="/thumbnail/canada.jpg"
      alt="Header icon"
      className="dark:invert group-hover/item:scale-125 ease-out duration-500"
      width={400}
      height={24}
      style={{
        margin: "auto"
}}
      priority
    /></div></Link>
    <Link href="/">
    <div className="relative group/item overflow-hidden rounded-lg shadow">
    <p className="absolute transition duration-500 opacity-0 group-hover/item:opacity-100 group-hover/item:bg-gray-400/50 size-full z-10 text-center">エンジニア向け技術サイトHTML/CSS/JavaScript/PHP/MySQL</p>
    <Image
      src="/thumbnail/portfolio.jpg"
      alt="Header icon"
      className="dark:invert group-hover/item:scale-125 ease-out duration-500"
      width={400}
      height={24}
      style={{
        margin: "auto"
}}
      priority
    /></div></Link></div></motion.div>
  )
}

export default WorksMotionF;
