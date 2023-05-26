import React from 'react'

export default function CustomInput({...props}) {
  return (
    <div className='gradient-2-bg p-[2px] rounded-[20px] w-fit'>
        <input type='text' {...props} className='px-[3px] w-[140px]   outline-none tracking-[0.75rem] text-[16px] font-[500]' maxLength={6}>

        </input>
    </div>
  )
}
