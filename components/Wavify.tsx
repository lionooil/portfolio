'use client'
import { motion } from 'framer-motion';
import React from 'react'
import Wave from 'react-wavify'

const Wavify = () => (
  <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }}>
  <Wave fill="url(#gradient)" style={{ display: 'flex', transition: '0.5s'}} options={{ height: 20, amplitude: 30, speed: 0.15, points: 3 }}>
    <defs>
      <linearGradient id="gradient" gradientTransform="rotate(90)">
        <stop offset="10%"  stopColor="#d4af37" />
        <stop offset="90%" stopColor="#f00" />
      </linearGradient>
    </defs>
  </Wave></motion.div>
)

export default Wavify;
