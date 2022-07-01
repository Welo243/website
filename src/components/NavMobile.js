import React, { useState } from "react";

import BarsIcon from '../assets/img/bars.png'
import CloseIcon from '../assets/img/close.png'


//IMPORT navigation data

import {navigation} from '../data';

// import Link
import {Link} from 'react-scroll'

const NavMobile = () =>{
const [isOpen, setIsOpen] =useState(false);

return (
<nav  className='lg:hidden relative z-20'>
    {/* menu Icon */}
    <button onClick={()=> setIsOpen(true)}>
        <img src={BarsIcon} alt="" />
    </button>
    {/* */}
    <ul className={`${isOpen ? 'right-0':'-right-full'} bg-primary fixed top-0 w-full
     h-screen text-white transition-all flex
     flex-col justify-center items-center space-y-8 
     text-lg`}>

        {/* Close button */}
        <button onClick={()=>setIsOpen(false)} className='absolute top-6 left-6'>
            <img src={CloseIcon} alt='' />
        </button>
        {navigation.map((item, index)=>{
            return <li key={index}>
                <Link to={item.href} activeClass='active'
                spy={true} 
                offset={-200}
                className='hover:text-accent-hover transition-all duration-300 cursor-pointer'
                >
                {item.name}
                </Link>
                </li>
        })}

    </ul>
</nav>
)
}

export default NavMobile