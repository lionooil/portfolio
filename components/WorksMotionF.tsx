'use client'
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import FadeinTextRight from '@/../components/FadeinTextRight';

const WorksMotionF = () => {
  return (
    <div className="min-h-screen">
    <h2 className="text-5xl text-center font-impact pt-16 mb-8">WORKS</h2>
    <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.5, delay: 1 }} viewport={{ once: true }}>
    <div className="flex flex-wrap w-4/5 mx-auto gap-4">

    <Link href="/" className="w-fit mx-auto my-8">
    <div className="relative group/item overflow-hidden rounded-lg shadow">
    <div className="absolute transition duration-500 opacity-0 group-hover/item:opacity-100 group-hover/item:bg-gray-600/80 z-10 size-full text-center text-white flex flex-col"><p className="my-auto"><span className="font-bold">エンジニア向け技術ブログ</span>HTML/CSS/JavaScript/PHP/MySQL</p></div>
    <Image
      src="/thumbnail/tech.jpg"
      alt="Header icon"
      className="group-hover/item:scale-125 ease-out duration-500"
      width={400}
      height={24}
      style={{
        margin: "auto"
}}
      priority
    /></div></Link>

    <Link href="/"  className="w-fit mx-auto my-8">
    <div className="relative group/item overflow-hidden rounded-lg shadow">
    <div className="absolute transition duration-500 opacity-0 group-hover/item:opacity-100 group-hover/item:bg-gray-400/50 size-full z-10 text-center flex flex-col"><span className="font-bold">エンジニア向け技術サイト</span>HTML/CSS/JavaScript/PHP/MySQL</div>
    <Image
      src="/thumbnail/canada.jpg"
      alt="Header icon"
      className="group-hover/item:scale-125 ease-out duration-500"
      width={400}
      height={24}
      style={{
        margin: "auto"
}}
      priority
    /></div></Link>

    <Link href="/"  className="w-fit mx-auto my-8">
    <div className="relative group/item overflow-hidden rounded-lg shadow">
    <div className="absolute transition duration-500 opacity-0 group-hover/item:opacity-100 group-hover/item:bg-gray-400/50 size-full z-10 text-center flex flex-col">エンジニア向け技術サイトHTML/CSS/JavaScript/PHP/MySQL</div>
    <Image
      src="/thumbnail/portfolio.jpg"
      alt="Header icon"
      className="group-hover/item:scale-125 ease-out duration-500"
      width={400}
      height={24}
      style={{
        margin: "auto"
}}
      priority
    /></div></Link>
    <Link href="/"  className="w-fit mx-auto my-8">
    <div className="relative group/item overflow-hidden rounded-lg shadow">
    <div className="absolute transition duration-500 opacity-0 group-hover/item:opacity-100 group-hover/item:bg-gray-400/50 size-full z-10 text-center flex flex-col">エンジニア向け技術サイトHTML/CSS/JavaScript/PHP/MySQL</div>
    <Image
      src="/thumbnail/sci-quotes-bot.jpg"
      alt="Header icon"
      className="group-hover/item:scale-125 ease-out duration-500"
      width={400}
      height={24}
      style={{
        margin: "auto"
}}
      priority
    /></div></Link>
    <Link href="/"  className="w-fit mx-auto my-8">
    <div className="relative group/item overflow-hidden rounded-lg shadow">
    <div className="absolute transition duration-500 opacity-0 group-hover/item:opacity-100 group-hover/item:bg-gray-400/50 size-full z-10 text-center flex flex-col">エンジニア向け技術サイトHTML/CSS/JavaScript/PHP/MySQL</div>
    <Image
      src="/thumbnail/tonkatsu.jpg"
      alt="Header icon"
      className="group-hover/item:scale-125 ease-out duration-500"
      width={400}
      height={24}
      style={{
        margin: "auto"
}}
      priority
    /></div></Link>
    <Link href="/"  className="w-fit mx-auto my-8">
    <div className="relative group/item overflow-hidden rounded-lg shadow">
    <div className="absolute transition duration-500 opacity-0 group-hover/item:opacity-100 group-hover/item:bg-gray-400/50 size-full z-10 text-center flex flex-col">エンジニア向け技術サイトHTML/CSS/JavaScript/PHP/MySQL</div>
    <Image
      src="/thumbnail/yuri-interview.jpg"
      alt="Header icon"
      className="group-hover/item:scale-125 ease-out duration-500"
      width={400}
      height={24}
      style={{
        margin: "auto"
}}
      priority
    /></div></Link>
    </div></motion.div>
    <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.5, delay: 1 }} viewport={{ once: true }}>
    <FadeinTextRight /></motion.div>
    </div>
  )
}

export default WorksMotionF;
