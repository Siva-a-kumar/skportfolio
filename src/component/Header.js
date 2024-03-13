import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header(){
    const[toggleMenu,setToggleMenu]=useState(false);
    return <header className=" flex  justify-between px-5 py-2  ">
        <a href="#" className="font-bold text-[#5B7B7A] ">siva</a>
        <nav className="hidden md:block">
        <ul className="flex text-[#FFCDA2]">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Project</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
       {toggleMenu&& <nav className="block md:hidden ">
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-[#5B7B7A] mobile-nav">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Project</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
        <button onClick ={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-[#FFCDA2] h-5'/></button>
       
    </header>
}