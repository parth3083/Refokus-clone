import React from 'react'
import Button from './Button'

function Navbar() {
  return (
      <div className='max-w-screen-lg py-4 mx-auto font border-b-[2px] border-zinc-700 flex items-center justify-between'>
          <div className='flex items-center gap-24'>
          <img src="Assets/Refokus_logo.svg" alt="" />
          <div className='links flex items-center gap-10'>
              {["Home", "Work", "Career", "", "New"].map((elem,index) => { 
                  return  elem.length===0 ? <span className='w-[2px] h-6 bg-zinc-700' key={index}></span> :(<a href="#"  className='flex text-sm items-center gap-1 S font-regular' key={index}>
                  {index===1 &&  <span className='inline-block w-2 h-2 rounded-full bg-green-500' style={{boxShadow:"0 0 0.25em #00FF19"}} key={index}></span>}{elem}</a>)
              })}
          </div>
      </div>
      <Button/>
    </div>
  )
}

export default Navbar