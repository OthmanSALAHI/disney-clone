import React from 'react'
import logo from '../assets/Images/logo.png';
import { useState } from 'react';
import {HiStar, HiMagnifyingGlass,
        HiHome, HiPlayCircle, HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './headerItem';
function Header() {
    const [toggle,setToggle] = useState(false);
    const menu = [
        {name : 'HOME', icon: HiHome},
        {name : 'SEARCH', icon: HiMagnifyingGlass},
        {name : 'WATCHLIST', icon: HiPlus},
        {name : 'ORIGINALS', icon: HiStar},
        {name : 'MOVIES', icon: HiPlayCircle},
        {name : 'SERIES', icon: HiTv},

    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex items-center gap-8'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
            <div className='hidden md:flex gap-8'>
                {menu.map((item, key) => (
                    <HeaderItem key={key} Icon={item.icon} name={item.name}/>
                
                ))}
            </div>
            <div className='flex md:hidden gap-5'>
                {menu.map((item, key) =>key < 3 && (
                    <HeaderItem Icon={item.icon} name={''}/>
                
                ))}
            </div>
            <div className='flex md:hidden gap-8' onClick={()=>setToggle(!toggle ?true : false)}>
                    <HeaderItem Icon={HiDotsVertical} name={''} />
                {toggle?<div className='absolute mt-5 bg-[#121212] border-[1px] border-gray-600 p-3 px-5 py-4'>
                    {menu.map((item, key) =>key >= 3 && (
                            <HeaderItem Icon={item.icon} name={item.name}/>
                    ))}
                </div>:null}
                
            </div>
        </div>
        <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg' className='w-[40px] rounded-full' />
    </div>
  );
}

export default Header