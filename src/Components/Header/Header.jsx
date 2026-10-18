import  { useState } from 'react'
import logo from '../../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2"
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from '../HeaderItem/HeaderItem';
function Header() {
    const [toggle, setToggle] = useState(false)
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        },
        
    ]
  return (
  <div className='flex items-center justify-between p-5'>
    <div className='flex gap-8 items-center'>
      <img src={logo} alt="Disney Logo" className='w-12 sm:w-14 md:w-16 lg:w-20 object-cover transition-all' />
      
              
      <div className='hidden md:flex gap-8 items-center'>
        {menu.map((item, index) => (
          <HeaderItem key={index} name={item.name} Icon={item.icon} />
        ))}
        </div>
        
        <div className='flex md:hidden gap-5 items-center'>
        {menu.map((item, index) =>index<3&& (
          <HeaderItem key={index} name={''} Icon={item.icon} />
        ))}
              <div className=' relative md:hidden' onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
        {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-800 p-4 px-6 py-5'>
              {menu.map((item, index) =>index>=3&& (
          <HeaderItem key={index} name={item.name} Icon={item.icon} />
        ))}
            </div>:null} 
              </div>
      </div>
    </div>

    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD2FA0F3965617FC515E3CEBD3AD51C00CCFFBF98F96448EFE46B82867FCE542/scale?format=png&width=64" alt="Profile Logo" className='w-[40px] rounded-full cursor-pointer' />
  </div>
)
}

export default Header