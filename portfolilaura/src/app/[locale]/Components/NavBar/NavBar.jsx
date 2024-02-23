'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import	LauraLogo from '../../../../Data/LogoLaura.png'
import { FaLinkedin } from "react-icons/fa";
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";
import { FaCalendarAlt } from "react-icons/fa";
import Swal from 'sweetalert2'
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import style from './NavBar.module.css'

export default function NavBar({SectionAbout, SectionProjects}) {
  const [stateBar, setStateBar] = useState(false)
  const [navBarState, setNavBarState] = useState(true)
  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile)
  const showSwal = () => {

    Swal.fire({
      title: 'Redirigiendo a su correo',
      icon: 'success',
    })
  }

const LinkedinLink = 'https://www.linkedin.com/in/laura-ram%C3%ADrez-carrivali-846a0a228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
const MailLink = 'mailto:lauraramirezcarrivali@gmail.com'
const CalendlyLink = 'https://calendly.com/lauramirezcarri'

  const scrollToSection1 = () => {
    const section = document.getElementById(SectionAbout); 
    console.log(section)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const scrollToSection2 = () => {
    const section = document.getElementById(SectionProjects); 
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 ? true : false);
setNavBarState(window.innerWidth > 768 ? true : false)  
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  const handleClick = () =>{
    if( stateBar === false){
      setStateBar(true)
    } 
    if( stateBar === true){
      setStateBar(false)
    }
  }
  return (<div>


    <div className={`fixed w-36 h-[100vh] lg:w-[100vw] lg:h-24 bg-offSalmon-200 flex flex-col lg:flex lg:flex-row shadow-sm lg:justify-between shadow-salmon-200 select-none p-3 ease-in-out duration-300 z-[100]
     ${
      navBarState ? 'translate-x-0' : 'translate-x-[-50vw]'
    }`}>
      {
        isMobile ? <div className="relative left-10 flex flex-col">
<button onClick={() => setNavBarState(!navBarState)} className="font-spartan text-3xl text-salmon-800 p-5"><SlArrowLeftCircle/></button>
        </div> : null
      }
        <div className="flex flex-col pb-5 place-self-start relative lg:left-8">
        <Image className="rounded-full h-32 w-36 lg:h-40 lg:w-40 p-2 bg-offSalmon-300 ring-8 ring-offSalmon-200" src={LauraLogo} width={300} height={300} alt="PhLogo"/>
        </div>     
<div className="flex flex-col lg:flex lg:flex-row relative gap-10 lg:gap-16 justify-self-end lg:right-4">
  <button onClick={()=> scrollToSection1()} className="text-lg lg:text-2xl text-center font-normal font-spartan transition-color ease-in duration-150 underline decoration-offSalmon-200  hover:decoration-salmon-800">Sobre mí</button>
  <button onClick={()=> scrollToSection2()} className="text-lg lg:text-2xl text-center font-normal font-spartan transition-color ease-in duration-150 underline decoration-offSalmon-200  hover:decoration-salmon-800 ">Mis Copys</button>
  <Link className="relative left-1 lg:top-5" href='/Laura_Ramírez_Carrivali_CV.pdf' download target="_blank"><button className="text-lg lg:text-2xl text-center font-normal font-spartan transition-color ease-in duration-150 underline decoration-offSalmon-200  hover:decoration-salmon-800">Descargar CV</button></Link>
  <div className="flex flex-col self-center h-8 w-40">
  <button onClick={() => handleClick()} className="text-lg lg:text-2xl text-center font-normal font-spartan transition-color ease-in duration-150 underline decoration-offSalmon-200  hover:decoration-salmon-800">¡Contactame!</button>
  {stateBar ?<div className={style.animate}>
    <div className="flex flex-col absolute left-8 lg:left-2 lg:top-2 justify-self-start bg-offSalmon-100 rounded p-4 transition-all divide-y divide-offSalmon-50 gap-2">
    <a href={LinkedinLink} target="_blank"> <button  className="text-md lg:text-2xl text-center font-normal gap-3 flex flex-row font-spartan transition-color ease-in duration-150 hover:text-salmon-800"><FaLinkedin/> Linkedin</button></a>
 <a href={MailLink} target="_blank"><button onClick={() => showSwal()} className="text-md lg:text-2xl text-center font-normal gap-3 flex flex-row font-spartan transition-color ease-in duration-150 hover:text-salmon-800"><IoIosMail/> Correo</button></a>
 <a href={CalendlyLink} target="_blank"><button className="text-md lg:text-2xl text-center font-normal gap-3 flex flex-row font-spartan transition-color ease-in duration-150 hover:text-salmon-800"><FaCalendarAlt/>Meeting</button></a>
  </div>
  </div> 
   :null
  }
  </div>
  
</div>
        
    </div>
    {!navBarState ? <div className={style.animate2}>
<button onClick={() => setNavBarState(!navBarState)} className="font-spartan text-3xl text-salmon-400 p-5"><SlArrowRightCircle/></button>
    </div> : null}
    </div>
  );
}