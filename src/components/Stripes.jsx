import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    var data = [
        {url:"Assets/css_design_awards.svg",number:52},
        {url:"Assets/no-code-conference.svg",number:2},
        {url:"Assets/awwards.svg",number:12},
        {url:"Assets/css_design_awards.svg",number:52},
        {url:"Assets/no-code-conference.svg",number:2},
        {url:"Assets/awwards.svg",number:12},

    ]
  return (
      <div className='mt-20 flex items-center'>
          {data.map((elem, index) => (
              <Stripe key={index} val={elem} />
          ))}
    </div>
  )
}

export default Stripes