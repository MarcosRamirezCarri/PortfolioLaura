'use client'
import style from './Companies.module.css'
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react'
import { Companies } from "../../Mocks/companiesMock";
import AOS from "aos";
import '../../../../../node_modules/aos/dist/aos.css'

export default function AllCompanies() {

    const compsCarouselRef = useRef(null); 

  const comps = [...Companies];
  const [clonedComps, setClonedComps] = useState([...comps]);
  let isDragging = false
 
  let startX; 
  let scrollLeft; 

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - compsCarouselRef.current.offsetLeft;
    scrollLeft = compsCarouselRef.current.scrollLeft;
  };


  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - compsCarouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    compsCarouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleTouchStart = (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - compsCarouselRef.current.offsetLeft;
    scrollLeft = compsCarouselRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - compsCarouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    compsCarouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    isDragging = false;
  };

  useEffect(() => {
    const clonedComps = [...comps, ...comps, ...comps];
    setClonedComps(clonedComps);
  
  }, []);

  useEffect(() => {
    AOS.init({duration: 1000})
  },[])
    return (
      <div className="w-full h-[50vh] flex flex-col relative top-28 ">
 <div  className='bg-gradient-to-r from-black to-offSalmon-950 w-full  h-[70vh] absolute skew-y-3 -z-[999]'></div>
<div className='flex flex-col gap-3'>
  <p data-aos='fade-right' className="text-2xl flex flex-row gap-2 text-left self-center text-offSalmon-100 font-semibold font-spartan">A través de Sabio Marketing</p>
<h1 data-aos='fade-left' className="text-4xl flex flex-row gap-2 text-center self-center text-offSalmon-200 font-semibold font-spartan">Marcas con las cuales he trabajado</h1>
  </div> 

 <div
        ref={compsCarouselRef} 
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        data-aos='fade-up'
        className='flex flex-row gap-5 p-3 overflow-hidden whitespace-nowrap '
      >
        {clonedComps.map((a, index) => (
          <div
            key={index}
            className={style.slide}
          >
            <Image className='h-8 w-12 rounded place-self-start absolute z-[100]' width={50} height={50} src={a.country}/>
            <Image className='h-24 w-24 rounded-xl self-center relative' src={a.imagen} alt='phProyect'width={100} height={100} />
            <p className='font-spartan text-xl text-offSalmon-950 self-center relative'>{a.name}</p>
          </div>
        ))}
        
      </div>
      
    
      </div>
    );
  }