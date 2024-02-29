import React, { useState } from 'react'
import { useScroll } from "framer-motion"

function Work() {
    const [images, setImages] = useState([
        { url: "Assets/1.jpg", top: "60%", left: "50%", isActive: false },
        { url: "Assets/2.jpg", top: "62%", left: "48%", isActive: false },
        { url: "Assets/3.jpg", top: "52%", left: "52%", isActive: false },
        { url: "Assets/4.jpg", top: "50%", left: "49%", isActive: false },
        { url: "Assets/5.jpg", top: "70%", left: "49%", isActive: false },
    ]);
    const { scrollYProgress } = useScroll();
    scrollYProgress.on("change", (data) => {
        function ImagesShow(arr) {
            setImages(prev => (
                prev.map((item, index) => (
                    arr.indexOf(index) === -1 ? ({...item,isActive:false}):{...item,isActive:true}
                ))
            ))
        }
        switch (Math.floor(data * 100)) {
            case 0:
                ImagesShow([]);
                break;
            case 1:
                ImagesShow([0]);
                break;
            case 2:
               ImagesShow([1]);
                break;
            case 5:
                ImagesShow([2]);
                break;
            case 10:
                ImagesShow([3]);
                break;
            case 15:
                ImagesShow([4]);
                break;
        }
    })
  return (
      <div className='w-full '>
          <div className='relative max-w-screen-lg  mx-auto text-center'>
              <h1 className='S text-[30vw] leading-none font-medium tracking-tight select-none'>work</h1>
              <div className='absolute top-0 w-full h-full '>
                  {images.map((elem, index) => (
                     elem.isActive && <img key={index} src={elem.url} className='w-64 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]' style={{top:elem.top,left:elem.left}} alt="" />
                 ))}
              </div>
          </div>
          
    </div>
  )
}

export default Work