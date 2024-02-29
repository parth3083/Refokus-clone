import React from 'react'
import Card from './Card'

function Cards() {
  return (
      <div className='w-full'>
          <div className='max-w-screen-lg py-20 mt-20 flex gap-2  mx-auto'>
        <Card width={"basis-1/3"} start={false} para={true} hover1={ "bg-zinc-500"} />
              <Card width={"basis-2/3"} start={true} para={false} hover="true" />
          </div>
          
    </div>
  )
}

export default Cards