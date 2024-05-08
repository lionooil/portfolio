import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/../libs/client";

import type { AppProps } from 'next/app';
import { FC } from 'react';
import MouseStalker from '@/../components/MouseStalker';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/../js/App.jsx'

export default async function StaticPage() {
    const { contents }  = await getBlogs();

    if (!contents) {
      return <h1 className="text-2xl font-bold text-center mt-20">No Contents</h1>;
    }

    return (
      <>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      <h2 className="text-4xl font-bold mb-4 mt-8 text-center">WELCOME TO LIOSS PORTFOLIO!!</h2>
      <Image
        src="/header-icon.svg"
        alt="Header icon"
        className="dark:invert"
        width={500}
        height={24}
        style={{
  margin: "auto", padding: "0px 8px"
}}
        priority
      />
      <div className="h-screen container mx-auto mt-10">
            <ul className="space-y-10">
                {contents.map((blog) => (
                 <li key={blog.id} className="p-5 rounded shadow-lg content flex justify-between items-center">
                    <h4>
                        {blog.title}
                    </h4>
                    <Link href={`/${blog.id}`}>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
                            詳細
                        </button>
                    </Link>
                  </li>
                ))}
            </ul>
        </div>
        <div className="h-screen container mx-auto mt-10">
        <h2>LINKS</h2>

</div>
      </>
    );
  }
