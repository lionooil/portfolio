'use client'
import { motion } from 'framer-motion'
import React from 'react'
import "@/../styles/FadeinTextRight.css";

export default function FadeinTextRight() {
    const words = "SOMETHING　AWESOME　IS　COMMING　..."
    const word = words.split("")

    const textanimate = word.map((word, index) => {
        return (
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{repeat: Infinity, repeatDelay: 2, duration: 1, delay: index * 0.05 }} key={index}>{word}
            </motion.div>
        )  })

  return (
    <div className='fadeintextright flex justify-center my-16 '>
        {textanimate}
    </div>
  )
}
