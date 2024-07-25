import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { development, others } from '@/data'

const TechStack = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            Versatile Competence in {' '}
            <span className='text-purple'>Tools and Technologies</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {/* <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'>
                <InfiniteMovingCards items={testimonials} direction='right' speed='slow'/>
            </div> */}

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
            <div className='flex flex-row items-center justify-center mt-5 w-full'>
                <AnimatedTooltip items={development}/>
            </div>
            <div className='flex flex-row items-center justify-center mb-10 w-full'>
                <AnimatedTooltip items={others}/>
            </div>
            {/* {companies.map((company) => (
                <React.Fragment key={company.id}>
                <div className="flex md:max-w-60 max-w-32 gap-2 hover:opacity-75 hover:scale-110">
                    <div className='flex flex-row items-center justify-center mb-10 w-full'>
                        <AnimatedTooltip items={company}/>
                        <img
                    src={company.img}
                    alt={company.name}
                    className="md:w-20 w-10"
                    />
                </div>
                </React.Fragment>
            ))} */}
            </div>
        </div>
    </div>
            
  )
}

export default TechStack