'use client'
import { motion } from 'framer-motion';
import Image from "next/image";

const ProfilePicture = () => {
  return (
    <div className="min-h-screen mx-auto flex flex-col bg-indigo-500">
    <h2 className="text-5xl text-center font-impact pt-16">PROFILE</h2>
    　<div className="flex-col my-auto ">
      <div className="flex flex-wrap mx-auto w-11/12 gap-4 my-8">
      <motion.div initial={{ x: 0, y: -200, scale: 0 }} whileInView={{ x: 0, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 1, type: 'spring', bounce: 0.8 }} viewport={{ once: true }} className="my-auto mx-auto">
      <Image
        src="/thumbnail/profile-icon.jpg"
        alt="Header icon"
        className="rounded-full mx-auto"
        width={400}
        height={24}
        priority
      />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.4, delay: 1 }} viewport={{ once: true }} className="my-auto mx-auto bg-white shadow p-8 rounded-md bg-opacity-50 md:text-xl">
      <p className="font-bold">Lios - 竹下　凌/Takeshita Ryo</p>
      <p>1996年生まれ。かに座。</p>
      <p>情報工学科卒業（学士）/ Bachelor of Engneering - Information Technology</p>
      <p>日本でサーバー、システム監視・運用、サーバー増設支援業務に2年間携わる。</p>
      <p>カナダの専門学校にてデジタルマーケティングの座学を修了。 / Deploma of Digital Marketing</p>
      <p>現在は、グローバル教育コンサルタント企業にてWebマーケティングチームとしてインターンシップ中。</p>
      </motion.div>
      </div></div>        </div>

  )
}

export default ProfilePicture;
