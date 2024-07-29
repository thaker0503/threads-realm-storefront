'use client';

// import { Github } from "@medusajs/icons"
// import { Button, Heading } from "@medusajs/ui"
import React from "react"
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import '../../../../styles/embla.css'

const Hero = () => {

  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = [{
    image: '/1.png',
  }, {
    image: '/2.png',
  }, {
    image: '/1.png',
  }, {
    image: '/2.png',
  }]

  return (
    // <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
    //   <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
    //     <span>
    //       <Heading
    //         level="h1"
    //         className="text-3xl leading-10 text-ui-fg-base font-normal"
    //       >
    //         Threads Realm
    //       </Heading>
    //       <Heading
    //         level="h2"
    //         className="text-3xl leading-10 text-ui-fg-subtle font-normal"
    //       >
    //         AI Powered Apparel
    //       </Heading>
    //     </span>
    //     {/* <a
    //       href="https://github.com/medusajs/nextjs-starter-medusa"
    //       target="_blank"
    //     >
    //       <Button variant="secondary">
    //         View on GitHub
    //         <Github />
    //       </Button>
    //     </a> */}
    //   </div>
    // </div>
    <EmblaCarousel
      slides={SLIDES}
      options={OPTIONS}
    />
  )
}

export default Hero
