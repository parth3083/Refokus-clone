import React from 'react'

function Footer() {
  return (
      <div className='w-full py-6 '>
          <div className='max-w-screen-lg mx-auto  flex gap-32'>
              <div className='basis-1/2'>
                  <h1 className='text-[10.5rem] tracking-tighter leading-none font-semibold'>refokus.</h1>
              </div>
              <div className=' basis-1/2 flex gap-4'>
                  <div className='flex flex-col'>
                      <h4 className='mb-8 text-zinc-500'>scripts</h4>
                      {["Twitter (X?)", "Instagram", "LinkedIn"].map((item,index) => (
                          <a href="#" key={index} className='text-zinc-500'>{item}</a>
                      ))}
                  </div>
                  <div className='flex flex-col'>
                      <h4 className='mb-8 text-zinc-500'>SiteMap</h4>
                      {["Home", "Work", "Carrer","Contact"].map((item,index) => (
                          <a href="#" key={index} className='text-zinc-500'>{item}</a>
                      ))}
                  </div>
                  <div className='flex flex-col gap-5 items-end'>
                      <p className='text-right'>Refokus is prioring digital technology driven by design and empowered by technology.</p>
                      <button className='px-3 w-fit py-1 bg-blue-600 rounded-md'>Enterprise Partner</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Footer