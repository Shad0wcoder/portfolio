import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/utils/cn'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { SparklesCore } from './ui/Sparkle'

const Hero = () => {
  return (
    <div className='pb-20 pt-38 flex flex-col items-center justify-center relative'>
      {/* <div className="w-full h-[100%] absolute inset-0 z-10">
        <SparklesCore
          background="transparent"
          minSize={0.01}
          maxSize={0.2}
          particleDensity={500}
          className="w-full h-full"
          particleColor="#fefefe"
        />
      </div> */}
      <Spotlight />

      <div className="h-screen w-full items-center justify-centerbg-black dark:bg-grid-white/[0.3] bg-grid-black/[0.2] flex absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:80px_80px]",
            "[background-image:linear-gradient(to_right,rgba(228,228,231,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.3)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.5)_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black" />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Dynamic and Responsive Web Design with Next.js
          </h2>

          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Hello!, I am Rohit - A Full Stack Developer.'
          />

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. I specialize in building scalable and efficient solutions using the latest technologies.
          </p>

          <a href="#about">
            <MagicButton title='Show my work' icon={<FaLocationArrow />} position='right' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero