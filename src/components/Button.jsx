import React from 'react'
import { IoMdReturnRight } from "react-icons/io";

function Button({title="Start a project"}) {
  return (
      <div className='w-36 rounded-full px-3 py-2 text-sm bg-white text-black flex items-center justify-between'>{title}
      <IoMdReturnRight className='text-lg' />
      </div>
  )
}

export default Button