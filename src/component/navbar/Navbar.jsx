import React from 'react'
import './Navbar.scss'
import { useState } from 'react'


const Navbar = () => {
  const [navBtn,setNavBtn]=useState(false);
  return (
    <>
    <div className='Navbar'>
        <div className='Nav'>
        <div className='Logo'>$$$</div>
        <div className='navContent1'>
            <div>events</div>
            <div>timeline</div>
            <div>highlights</div>
        </div>
        <div className='navButton'>
            <div>Sign In</div>
            <div className='regButton'>Register</div>
        </div>
        <div className='hamBtn'>
        <button className='navBtn' onClick={()=>setNavBtn(!navBtn)}>
        <img src="../../Assets/images/navbutton.png" alt="" className="navButton"/>
        </button>
        </div>
    </div>
    </div>
    {navBtn && 
      <div className='nav2'>
        <div className='navContent2'>
            <div className='navButton2'>events</div>
            <div className='navButton2'>timeline</div>
            <div className='navButton2'>highlights</div>
            <div className='navButton2'>Sign In</div>
            <div className='regButton2'>Register</div>
      </div>
      </div>
      }
      </>
  )
}

export default Navbar