import Card from '@/components/card'
import React from 'react'
import { Poppins } from 'next/font/google'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import { NAVLINKS } from '@/constants/navlinks'
import Link from 'next/link'

const popins = Poppins({
    subsets: ['latin'],
    weight: ['400','500','600','700']
  })

export const metadata = {
  title: "Enrolled Friends | TutDude",
  description: ''
};
  

export default function page() {
  return (
    <main className={`${popins.className}`}>
      <Header navlink={NAVLINKS}/>
      <Navbar/>
      <div className=' px-[30px] lg:px-[187px]  mb-[66px]'>
        <h3 className='text-[16px] text-[--main-color] font-[400]'>Your Referral Code<span className='text-[--gray]'>(3)</span></h3>
        <div className='p-[8px] font-[500] border-[#DFDFDF] border-[1.5px] rounded-[10px] pl-[5px] w-fit tracking-[0.75rem]'><span className='ml-[10px]'>EDCH54</span></div>
      </div>
      <div className='px-[30px] lg:px-[187px]'>
        <h3 className='text-[20px] text-[--main-color] font-[600]'>Friends who enrolled <span className='text-[--gray]'>(3)</span></h3>
      </div>
      <section className='scrollbar px-[30px] lg:mx-[187px] lg:h-[250px] overflow-x-scroll mt-[30px] gap-[10px] flex mobile-view'>
        <Card name="Dhiraj Saxsena" date="14 Sep, 2022" amount="185"/>
        <Card name="Subhash Mishra" date="15 Sep, 2022" amount="485"/>
        <Card name="Prafull Kumar" date="16 Sep, 2022" amount="485"/>
      </section>
      <section className='lg:px-[187px] px-[30px] mt-[40px] flex flex-col gap-[20px]'>
        <Link href='/hdh' className='text-[--main-color] font-[500] '>Terms & Condition  </Link>
      </section>
    </main>
  )
}
