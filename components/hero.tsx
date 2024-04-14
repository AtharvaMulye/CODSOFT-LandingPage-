"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/container";
import { Button } from "./ui/button";
import Link from "next/link";
const Hero: FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/webAdmin.svg", "/codeAdmin.svg", "/devAdmin.svg"];

  useEffect(() => {
    const cycleImages = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
    const intervalId = setInterval(cycleImages, 8000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2 md:[flex justify-center items-center self-center]">
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3.5xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white sm:text-center">
              Your Gateway to Comprehensive Coding Resources - COMPIL
            </h1>
            <p className="py-5 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 sm:text-center">
              &quot;🚀 Welcome to COMPIL, your coding shortcut! With Next.js &
              TailwindCSS, we&#39;ve compiled the best coding treasures into one
              epic hub. No more digital wandering; at COMPIL, easy access to
              websites, videos, channels, and forums awaits. Your shortcut to
              coding brilliance starts here – open-source and ready for your
              coding adventure! 🌐✨&quot;
            </p>
            <Link href={"https://compil.vercel.app"}>
            <Button variant={"ghost"} className="flex bg-blue-400 hover:bg-blue-200 justify-center items-center w-full text-lg font-semibold">Visit COMPIL!</Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 mt-[-3.6rem] dark:mix-blend-lighten" >
          <div className="">
            <Image
              src={images[currentImageIndex]}
              width={600}
              height={600}
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;