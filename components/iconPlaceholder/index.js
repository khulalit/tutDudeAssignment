import React from 'react'
import Image from 'next/image'

export default function IconPlaceholder({src}) {
  return (
    <div className='bg-[rgba(217,217,217,0.25)] rounded-full h-[32px] w-[32px] flex justify-center items-center' style={{boxSizing: 'content-box'}}>
        <Image src={src} alt="icon" className='aspect-square' style={{aspectRatio: '1/1'}}/>
    </div>
  )
}
