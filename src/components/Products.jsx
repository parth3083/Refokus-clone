import React, { useState } from 'react'
import Product from './Product'
import {motion} from 'framer-motion'

function Products() {
    const products = [
        { title: "arqitel", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae possimus accusamus vitae doloremque itaque eos consequatur quas earum.",live:true,case:false},
        { title: "TTR", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae possimus accusamus vitae doloremque itaque eos consequatur quas earum.",live:true,case:true},
        { title: "Silvr", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae possimus accusamus vitae doloremque itaque eos consequatur quas earum.",live:true,case:true},
        { title: "rainfall", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae possimus accusamus vitae doloremque itaque eos consequatur quas earum.",live:true,case:false},
        { title: "Maniv", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae possimus accusamus vitae doloremque itaque eos consequatur quas earum.",live:true,case:true},
        { title: "Cula", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae possimus accusamus vitae doloremque itaque eos consequatur quas earum.",live:true,case:true},
    ];
    const [pos, setPos] = useState(0);
    const mover = (val) => {
        setPos(val * 23) ;
    }
  return (
      <div className='mt-32 py-12 relative'>
          {products.map((elem, index) => (
              <Product key={index} mover={mover} count={index} elem={elem} />
          ))}
          <div className='absolute w-full h-full top-0 pointer-events-none'>
              <motion.div initial={{y:pos, x:'-50%'}}
                  animate={{ y: pos + `rem` }}
                  transition={{ease:[0.76, 0, 0.24, 1],duration:0.6}}
                className='  rounded-xl window absolute left-[43%] top-[7%] w-[25rem] h-[23rem] overflow-hidden '>
                  <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{ y: -pos + `rem` }} className='w-full h-full'>
                      <video className='w-full h-full object-cover' muted autoPlay loop src="Assets/Arqitel project video 4_3.webm"></video>
              </motion.div>
                  <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{ y: -pos + `rem` }} className='w-full h-full '>
                  <video className='w-full h-full object-cover' muted autoPlay loop src="Assets/TTR project video 4_3_H.264.webm"></video>
              </motion.div>
                  <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{ y: -pos + `rem` }} className='w-full h-full '>
                  <video className='w-full h-full object-cover' muted autoPlay loop src="Assets/Silvr.webm"></video>
              </motion.div>
                  <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{ y: -pos + `rem` }} className='w-full h-full '>
                  <video className='w-full h-full object-cover' muted autoPlay loop src="Assets/rainfall.webm"></video>
              </motion.div>
                  <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{ y: -pos + `rem` }} className='w-full h-full '>
                  <video className='w-full h-full object-cover' muted autoPlay loop src="Assets/Maniv-Compressed.mp4"></video>
              </motion.div>
                  <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{ y: -pos + `rem` }} className='w-full h-full '>
                  <video className='w-full h-full object-cover' muted autoPlay loop src="Assets/Cula_promo_new_4_3.mp4"></video>
              </motion.div>
              </motion.div>
          </div>
    </div>
  )
}

export default Products