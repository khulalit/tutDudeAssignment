'use client'
import Header from '@/components/header'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { NAVLINKS } from '@/constants/navlinks'
import Navbar from '@/components/navbar'
import CustomInput from '@/components/input'
import IconPlaceholder from '@/components/iconPlaceholder'
import { HowTo } from '@/constants/StepHomeScreen'
import Link from 'next/link'
import { useEffect } from 'react'

const popins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700']
})

export const metadata = {
  title: "Home | TutDude",
  description: ''
};

export default function Home() {
  useEffect(()=>{
    if(localStorage.getItem('alreadyOpened') == undefined)
      alert('Click on the friends who enrolled link bellow to go next page ')
    localStorage.setItem('alreadyOpened',true)
  })
  return (
    <main className={`${popins.className} mb-[80px]`} >
      <Header navlink={NAVLINKS}/>
      <Navbar/>
      <section className='lg:px-[187px] px-[35px] lg:flex lg:justify-between mt-[30px] gap-[10px] lg:flex-row flex-col'>
        {/* <div>
          <span className='text-[--main-color]'>Your Referal Code</span>
          <CustomInput/>
        </div> */}
        <div className='shadow rounded-[20px] max-w-[486px] p-[20px] '>
          <div className='flex flex-wrap gap-[20px]'>
            <span className='text-[--main-color] '>Referal Earning <br/> <span className='text-[32px] font-[500] text-[--black] whitespace-nowrap'>₹ 2,500</span> </span>
            <span className='text-[--main-color] '>Total Referrals <br/> <span className='text-[32px] font-[500] text-[--black]'>7</span> </span>
            <span className='text-[--main-color]  whitespace-nowrap'>Wallet Balance <br/> <span className='text-[32px] font-[500] text-[--black]'>₹ 500</span> </span>
            <div className='grow flex justify-center items-center w-max-[116px]'>
              <button className='bg-[--main-color] text-white p-2 rounded-full text-[14px]'>Withdraw Balance</button>
            </div> 
          </div>
        </div>
        <div className=''>
          <div className='mb-[9px] text-[--main-color] mt-[20px] font-[600] text-[24px]'>Your Referal Code</div>
          <CustomInput value={'EDCH54'} style={{paddingInline: '32px', paddingBlock: '15px', fontSize: '20px', letterSpacing: '1.5rem', width: '280px', color: '#800080', borderRadius: '20px', borderColor: 'linear-gradient(270deg, #800080 0%, #FF864C 100%)'}} />
        </div>
      </section>
      <section className='lg:px-[187px] mt-[40px] px-[30px]'>
        <h2 className='text-[24px] font-[600] text-[--main-color] mb-4'>How its works?</h2>
        <div className='flex lg:flex-row flex-col lg:flex-wrap'>
          {HowTo.map(({heading,text,icon})=><div className='lg:w-1/2 flex gap-2 mb-[30px]'>
            <IconPlaceholder src={icon}/>
            <div>
              <h4 className='font-[500]'>{heading}</h4>
              <p className='text-[#4D4D4D] text-[16px]'>{text}</p>
            </div>

          </div>)}
        </div>
      </section>
      <section className='lg:px-[187px] px-[30px] mt-[40px] flex flex-col gap-[20px]'>
        <Link href='/enroled-friends' className='text-[--main-color] font-[500]  mb-[20px]'>Friends Who Enrolled  </Link>
        <Link href='/hdh' className='text-[--main-color] font-[500] '>Terms & Condition  </Link>
      </section>
    </main>
  )
}
