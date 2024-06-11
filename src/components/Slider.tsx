import React from 'react'
import Image from '../../node_modules/next/image';

const images = [
  {},
]
const Slider = () => {
  return (
    <div className='grid place-items-center grid-cols-2 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl'>
      <div className='w-full flex justify-center items-center gap-4 transition-transform ease-in-outduration-500 rounded-2xl'>
        {images.map((pic, index) => (
          <div key={index}>
            <Image
              src={pic.src}
              alt=""
              width={400}
              height={400}
              className='w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl'
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider