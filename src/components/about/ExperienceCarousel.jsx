"use client";

import React from 'react'
import { Carousel, ThemeProvider } from '@material-tailwind/react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';



const ExperienceCarousel = () => {

  const theme = {
    carousel: {
      defaultProps: {
        prevArrow: ({ loop, handlePrev, firstIndex }) => {
          return (
            <button
              onClick={handlePrev}
              disabled={!loop && firstIndex}
              className="!absolute left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
              style={{ position: 'absolute', top: '12%' }}
            >
              <ChevronLeftIcon strokeWidth={3} className="-ml-1 h-7 w-7" />
            </button>
          );
        },
        nextArrow: ({ loop, handleNext, lastIndex }) => (
          <button
            onClick={handleNext}
            disabled={!loop && lastIndex}
            className="!absolute right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
            style={{ position: 'absolute', top: '12%' }}
          >
            <ChevronRightIcon strokeWidth={3} className="ml-1 h-7 w-7" />
          </button>
        ),
        navigation: ({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                  activeIndex === i ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        ),
        autoplay: false,
        autoplayDelay: 3000,
        transition: {
          type: "spring",
          duration: 0.5,
        },
        loop: false,
        className: "",
      },
      styles: {
        base: {
          carousel: {
            position: "relative",
            width: "w-full",
            height: "h-full",
            overflowX: "overflow-x-hidden",
            display: "flex",
          },
   
          slide: {
            width: "w-full",
            height: "h-full",
            display: "inline-block",
            flex: "flex-none",
          },
        },
      },
    },
  };

  return (
    <ThemeProvider value={theme}>
      <Carousel navigation="" className="rounded-xl">
        <div className='flex flex-col items-center justify-center'>
          <img
              src="https://www.thestatesman.com/wp-content/uploads/2021/05/ongc-ongf-1.jpg"
              alt="image 1"
              className="h-20 w-30 rounded-full"
          />
          
          <h1 className='mt-10 text-md lg:text-2xl text-accent font-semibold'>Oil and Natural Gas Corporation (ONGC)</h1>
          <h3 className='mt-5 text-sm lg:text-lg text-muted-foreground'>Summer Internship | Web Developer (Intern)</h3>
          <p>May 2023 - June 2023</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img
              src="https://media.licdn.com/dms/image/D560BAQGcnnQTyjFVfA/company-logo_200_200/0/1699540097085/academor_logo?e=2147483647&v=beta&t=dDuDyG97pRg7f-VNUyI4UjQ8FP_dlg5dqFFHqlAgTEw"
              alt="image 2"
              className="h-20 w-30 rounded-full"
          />
          <h1 className='mt-10 text-lg lg:text-2xl text-accent font-semibold'>Academor</h1>
          <h3 className='mt-5 text-sm lg:text-lg text-muted-foreground'>Web Developer | Skill Development Training</h3>
          <p>August 2023 - October 2023</p>
        </div>
      </Carousel>
    </ThemeProvider>

  )
}

export default ExperienceCarousel;
