import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/../libs/client";

import type { AppProps } from 'next/app';
import { FC } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/../js/MouseStalker.jsx';

import Top from '@/../components/Top';
import MouseStalker from '@/../components/MouseStalker';
import WorksMotionF from '@/../components/WorksMotionF';
import ProfilePicture from '@/../components/ProfilePicture';
import Footer from "@/../components/footer";

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
        <Top />
        <ProfilePicture />
        <WorksMotionF />
        <Footer />
      </>
    );
  }
