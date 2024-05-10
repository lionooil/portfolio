'use client'
import { motion } from 'framer-motion';
import Image from "next/image";

const ProfilePicture = () => {
  return (
    　<div className="flex-col my-auto">
      <div className="flex">
      <motion.div initial={{ x: 0, y: -200, scale: 0 }} whileInView={{ x: 0, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.6, type: 'spring', bounce: 0.8 }} viewport={{ once: true }} className="m-auto">
      <Image
        src="/thumbnail/profile-icon.jpg"
        alt="Header icon"
        className="dark:invert rounded-full"
        width={400}
        height={24}
        style={{
           padding: "0px 8px"
}}
        priority
      />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }} className="m-auto bg-white shadow p-8 rounded-md bg-opacity-50">
      <p className="font-bold">Lios - 竹下　凌/Takeshita Ryo</p>
      <p>1996年生まれ。かに座。</p>
      <p>情報工学科卒業（学士）/ Bachelor of Engneering - Information Technology</p>
      <p>日本でサーバー、システム監視・運用、サーバー増設支援業務に2年間携わる。</p>
      <p>カナダの専門学校にてデジタルマーケティングの座学を修了。 / Deploma of Digital Marketing</p>
      <p>現在は、グローバル教育コンサルタント企業にてWebマーケティングチームとしてインターンシップ中。</p>
      </motion.div>
      </div></div>
  )
}

export default ProfilePicture;
