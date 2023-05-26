import React from 'react'
import Pill from '../Pill'

export default function Card({name,date, courseList, amount}) {
  return (
    <div className='card text-white p-[20px]'>
        <div className='cardHeader flex justify-between'>
            <span className='text-[16px] font-[700]'>
                {name}
            </span>
            <span className='text-[14px]'>
                {date}
            </span>
        </div>
        <div className='p-[9px]'>
            <span className='text-[14px]'>Course enrolled(6)</span>
            <div className='flex flex-wrap gap-[6px] py-[14px]'>
                <Pill text={'UX/UI'}/>
                <Pill text={'Photoshop'}/>
                <Pill text={'Ilustrator'}/>
                <Pill text={'Python'}/>
                <Pill text={'MERN'}/>
                <Pill text={'Java'}/>
            </div>
        </div>
        <div className='flex items-center gap-[6px]'>
            <span className='text-[14px]'>Referral Amount</span>
            <span className='text-[24px] font-[700]'>₹{amount}</span>
        </div>
    </div>
  )
}
