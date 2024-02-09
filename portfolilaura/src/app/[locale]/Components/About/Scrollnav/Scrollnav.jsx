'use client'
import React, { useState, useEffect } from 'react'
import style from './Scrollnav.module.css'
import { FaAngleRight } from "react-icons/fa";


export default function Scrollnav ()  {

  const [scrollTop, setScrollTop] = useState(0);


  useEffect(()=>{
    const handleScroll = event => {
      const { scrollTop } = event.target;
      setScrollTop(scrollTop)
    };
    window.addEventListener('scroll', handleScroll)
    return window.removeEventListener('scroll', handleScroll)
  }, []) 

  return (
    <div className={style.Scrollnav}>
      {scrollTop === 0 &&
      <FaAngleRight style={{transform: 'rotate(90deg)'}}/>
      }
    </div>
  )
}