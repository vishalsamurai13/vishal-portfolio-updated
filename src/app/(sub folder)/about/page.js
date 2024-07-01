"use client";

import Image from "next/image";
import bg from "../../../../public/background/about-background.jpeg"

import RenderModel from "@/components/RenderModel";

// import Rocket from "@/components/models/Rocket";
import AboutDetails from "@/components/about";
import { useTypewriter } from 'react-simple-typewriter';
import dynamic from "next/dynamic";

const Rocket = dynamic(() => import("@/components/models/Rocket"), {ssr: false});

export default function Home() {

  const [text, count] = useTypewriter({
    words: [
        "Hello There!",
        "Welcome to my Portfolio",
        "This is a story of",
        "A-Guy-who-goes-to-Gym",
        "<But-Loves-To-Code />"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <Image 
        priority
        sizes="100vw"
        src={bg}
        alt="background"
        className="h-full w-full object-cover object-center opacity-25 fixed top-0 left-0" 
      />
      

        <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
            <RenderModel>
              <Rocket />
            </RenderModel>
        </div>

        <div className="relative w-full h-screen flex flex-col items-center justify-center">
          <div className="w-full absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
            <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-accent">Vishal Sharma</h1>
          </div>
          <p className="font-semibold text-foreground text-xl md:text-2xl lg:text-3xl py-10"><i>{text}</i></p>
        </div>
        

        <AboutDetails />
    </>
  );
}
