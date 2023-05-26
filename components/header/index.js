'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/assets/header/logo.svg'
import Link from 'next/link';
import chevron from  '@/assets/header/chevronWhite.svg';

export default function Header({ navlink}) {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  return (
    <header className='flex items-center px-[30px] lg:px-[74px] justify-between relative'>
        <div>
            <Image src={Logo} alt='logo'/>
        </div>
        <div className='lg:block'>
              <ul className='lg:flex hidden gap-4'>
                {navlink.map(({title,iconLeft,iconRight})=>
                  <li className={`flex gap-[6px] ${title === 'Profile Name'?'text-[--main-color]':'text-[--main-color-light]'}`}>
                    {iconLeft && <Image src={iconLeft} alt='logo'/>}
                    <Link href='/'>{title}</Link>
                    {iconRight && <Image src={iconRight} alt='logo' className='cursor-pointer'/>}
                  </li>
                )}
              </ul>
        </div>
        <div className='justify-self-end lg:hidden seeOnlyMobile'>
          <button className='bg-[--main-color] text-white p-2 rounded-[10px] text-[14px] font-[500] flex' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>Profile Name <Image src={chevron} alt='chevron'/></button>
        </div>
        {(isMenuOpen && <div className='w-[130px] h-[100px] absolute top-[50px] bg-white rounded-[5px] right-[30px] shadow'>

        </div>)}
    </header>
  )
}
