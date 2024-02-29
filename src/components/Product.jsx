import React from 'react'
import Button from './Button'

function Product({elem,mover,count}) {
  return (
      <div className='w-full  mb-16 h-[23rem] '>
          <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-lg h-full  mx-auto flex items-center justify-between'>
              <div className='w-[30%]'><h1 className='S text-6xl capitalize '>{elem.title}</h1></div>
              <div className='w-[40%]'>
                  <p className='S text-lg leading-[25px] text-balance mb-5'>{elem.desc}</p>
                  <div className='flex items-center gap-5'>
                  {elem.live && <Button title="Live Website"/>}
                  {elem.case && <Button title="Case Study"/>}
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Product