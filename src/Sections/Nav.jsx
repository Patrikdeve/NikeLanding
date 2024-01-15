import React, {useState} from 'react'
import headerLogo from './../assets/images/header-logo.svg'
import hamburger from './../assets/icons/hamburger.svg'
import { navLinks } from '../Constants'
import {RiCloseLine} from 'react-icons/ri'


const Menu= () => {
  return (<>
    <p  className='links'><a href = "#home">Home</a></p>
    <p className='links'><a href = "#aboutus">About Us</a></p>
    <p className='links'><a href = "#products">Products</a></p>
    <p className='links'><a href = "#contactus">Contact Us</a></p>
    </>)
}
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className='padding-x 
    py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'> 
          <img src={headerLogo} alt='logo' width={130} height={29}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {
              navLinks.map(link => <li key={link.label}><a href = {link.href} className='font-montserrat leading-nor text-lg text-slate-gray'>
                    {link.label}
                </a></li>)
            }
        </ul>
        <div className='hidden max-lg:block scale-up-center'> 
        {
          toggle ?
          <RiCloseLine className='c-slate-gray hover:cursor-pointer' size= {27} onClick={() => setToggle(false)} />:
             <img className= "hover:cursor-pointer"src={hamburger} height={30} width={30} onClick={() => setToggle(true) }/> 
        } {
          toggle && (
            <div>
              <Menu className = 'bg-pale-blue width-20' />
            </div>
          )
        }
           
        </div>
      </nav>
    </header>
  )
}

export default Nav
