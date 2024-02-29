import React from 'react'
import {motion} from 'framer-motion'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width,start,para,hover="false"}) {
  return (
      <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff",padding:"18px"}} className={`bg-zinc-700 rounded-lg p-3  h-[25rem] ${width} flex flex-col items-start justify-between`}>
          <div className='w-full'>
          <div className='w-full flex items-center justify-between'>
              <h3>heading</h3>
              <IoIosArrowRoundForward />
          </div>
          <h1 className='text-4xl S mt-2 font-medium font-[S]'>Projects and all</h1>
          </div>
          <div >
              {start && (
                  <>
                    <h1 className='text-8xl tracking-tight leading-none font-medium'>Start a project</h1>
                    <button className='rounded-full px-3 py-1 mt-5 border-zinc-500 border'>Contact Us</button>
              </>
              )}
             {para == true && ( <p className='text-sm text-zinc-400 mt-3'>Lorem ipsum dolor sit dolor sit  amet  amet consectetur adipisicing elit.</p>)}
          </div>
    </motion.div>
  )
}

export default Card