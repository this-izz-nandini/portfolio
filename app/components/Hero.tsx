import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { IoMdOpen } from "react-icons/io";
import { socialMedia } from '@/data';

const Hero = () => {
  return (
    <div className='pb-20 pt-20 h-full'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>

      {/* <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center"> */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/> */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className='flex md:flex-row flex-col justify-end pb-20'>
            <div className='flex items-center md:gap-3 gap-6 sm:gap-3'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                        <a href={profile.link}><img src={profile.img} alt="icons" width={20} height={20} /></a>
                    </div>
                ))}
            </div>
        </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome to my portfolio
          </p>
          <TextGenerateEffect duration={2} filter={false} className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Hi, I&apos;m Nandini Jindal, a Full Stack Web Developer'/>
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Based in Ghaziabad, UP. 
          </p>
          <a href="https://drive.google.com/file/d/1DwgaPfDssHE6tnooe0X-AzOA4lmhDxz1/view?usp=sharing">
            <MagicButton title='Show my resume' icon={<IoMdOpen/>} position='right'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero