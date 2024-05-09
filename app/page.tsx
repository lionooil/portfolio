import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/../libs/client";

import type { AppProps } from 'next/app';
import { FC } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/../js/App.jsx';

import MouseStalker from '@/../components/MouseStalker';
import FramerMotionTest from '@/../components/FramerMotionTest';
import ProgressBar from '@/../components/ProgressBar';



export default async function StaticPage() {
    const { contents }  = await getBlogs();
    if (!contents) {
      return <h1 className="text-2xl font-bold text-center mt-20">No Contents</h1>;
    }

    return (
      <>
      <React.StrictMode>
        <App />
        </React.StrictMode>
      <div className="h-screen mx-auto flex flex-col">
      <h1 className="text-4xl mb-4 mt-8 text-center font-impact">WELCOME TO LIOS&#39;s PORTFOLIO!!</h1>
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
      <div className="flex">
      <Image
        src="/icons/icon-trans-tech.svg"
        alt="Header icon"
        className="dark:invert fadeUp-1"
        width={160}
        height={160}
        style={{
  margin: "8px auto", padding: "0px 8px"
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
  margin: "8px auto", padding: "0px 8px"
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
        </div>
        <div className="h-screen mx-auto bg-indigo-500">
        <h2 className="text-4xl text-center font-impact pt-16">WORKS</h2>
        <div className="flex my-8 fadeUp-0">
        <Image
          src="/thumbnail/tech.jpg"
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
          src="/thumbnail/canada.jpg"
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
          src="/thumbnail/portfolio.jpg"
          alt="Header icon"
          className="dark:invert"
          width={300}
          height={24}
          style={{
            margin: "auto", padding: "0px 8px"
  }}
          priority
        /></div>
        <FramerMotionTest />
</div>
      </>
    );
  }
