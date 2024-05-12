'use client'
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

const WorksMotionS = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.5, delay: 1 }} viewport={{ once: true }}>
      <div className="">
      </div>

      </motion.div>
  )
}

export default WorksMotionS;
