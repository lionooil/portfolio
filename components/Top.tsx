'use client'
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

import ProgressBar from '@/../components/ProgressBar';
import Wavify from '@/../components/Wavify';

const Top = () => {
  return (
<div className="h-screen mx-auto flex flex-col">
<h1 className="text-6xl mb-4 mt-8 text-center font-impact">WELCOME TO LIOS&#39;s PORTFOLIO!!</h1>
<ProgressBar />
<Image
  src="/icons/header-icon-trans-tech.svg"
  alt="Header icon"
  className="dark:invert fadeUp-0"
  width={500}
  height={24}
  style={{
margin: "8px auto", padding: "0px 8px"
}}
  priority
/>
<Image
  src="/icons/header-icon-trans-global.svg"
  alt="Header icon"
  className="dark:invert fadeUp-05"
  width={500}
  height={24}
  style={{
margin: "8px auto", padding: "0px 8px"
}}
  priority
/>
<div className="flex justify-center">
<Image
  src="/icons/icon-trans-tech.svg"
  alt="Header icon"
  className="dark:invert fadeUp-1"
  width={160}
  height={160}
  style={{

}}
  priority
/>
<Image
  src="/icons/icon-trans-global.svg"
  alt="Header icon"
  className="dark:invert fadeUp-1"
  width={160}
  height={160}
  style={{
}}
  priority
/></div>

<Image
  src="/icons/arrow-purple-icon.svg"
  alt="Header icon"
  className="dark:invert animate-bounce"
  width={100}
  height={24}
  style={{
    margin: "auto auto 16px auto", padding: "0px 8px"
}}
  priority
/>
<Wavify />
  </div>
)
}

export default Top;
