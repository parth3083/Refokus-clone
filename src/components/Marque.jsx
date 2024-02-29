import React from 'react'
import {motion} from 'framer-motion'

function Marque({ imageurl,direction}) {
  return (
    <div className='flex gap-10 py-6 overflow-hidden w-full '>
      <motion.div initial={{x: direction=="left" ? "0" : "-100%"}} animate={{x: direction=="left" ? "-100%":"0"}} transition={{ease:"linear",duration:13,repeat:Infinity}} className='flex flex-shrink-0 gap-40 py-5 pr-24'>
      {imageurl.map((url,index) => (
              <img key={index} src={url} className='h-[100%]' alt="" />
          ))}
      </motion.div>
      <motion.div initial={{x: direction=="left" ? "0" : "-100%"}} animate={{x: direction=="left" ? "-100%":"0"}} transition={{ease:"linear",duration:13,repeat:Infinity}} className='flex flex-shrink-0 gap-40 py-5 pr-24'>
      {imageurl.map((url,index) => (
              <img key={index} src={url} className='h-[100%]' alt="" />
          ))}
      </motion.div>

         
    </div>
  )
}

export default Marque