import React from 'react'

function Stripe({val}) {
  return (
      <div className='w-[16.66%] border-t-2 border-b-2 border-r-2 S px-5 py-4 flex items-center justify-between border-zinc-700'>
          <img src={val.url} alt="" />
          <span className='font-semibold text-xl'>{val.number}</span>
    </div>
  )
}

export default Stripe