import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[50px] md:mb-10' id='contact'>

        <div className='flex flex-col items-center'>
            <h1 className='w-full h-full font-bold text-2xl md:text-4xl lg:text-6xl text-center lg:max-w-[45vw]'>
                Ready to take <span className='text-purple-300'>your</span> digital presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let's discuss how I can help you acheive your goals.</p>
            <a href="mailto:rohitvishwa9810@gmail.com">
                <MagicButton 
                    title="Let's get in touch"
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>
                Copyright © {new Date().getFullYear()} Rohit Vishwakarma
            </p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) =>(
                    <a key={profile.id} href={profile.link} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black/20 rounded-lg border-black/85'>
                        <img src={profile.img} height={20} width={20}/>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer