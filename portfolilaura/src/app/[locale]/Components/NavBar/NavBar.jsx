'use client'
import { useState } from "react";
import	LauraLogo from '../../../../Data/LogoLaura.png'
import { FaLinkedin } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import Swal from 'sweetalert2'
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import style from './NavBar.module.css'

export default function NavBar({SectionAbout, SectionProjects}) {
  const [stateBar, setStateBar] = useState(false)
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


  
  const handleClick = () =>{
    if( stateBar === false){
      setStateBar(true)
    } 
    if( stateBar === true){
      setStateBar(false)
    }
  }
  return (
    <div className="fixed w-[100vw] h-24 bg-offSalmon-200 flex flex-row shadow-sm justify-between shadow-salmon-200 select-none p-3 z-[100]">
        <div className="flex flex-col place-self-start relative left-8">
        <Image className="rounded-full h-40 w-40 p-2 bg-offSalmon-300 ring-8 ring-offSalmon-200" src={LauraLogo} width={300} height={300} alt="PhLogo"/>
        </div>
      
<div className="flex flex-row relative gap-16 justify-self-end right-4">
  <button onClick={()=> scrollToSection1()} className="text-2xl text-center font-normal font-spartan transition-color ease-in duration-150 underline decoration-offSalmon-200  hover:decoration-salmon-800">Sobre mi</button>
  <button onClick={()=> scrollToSection2()} className="text-2xl text-center font-normal font-spartan transition-color ease-in duration-150 underline decoration-offSalmon-200  hover:decoration-salmon-800 ">Mis Copys</button>
  <div className="flex flex-col self-center h-8 w-40">
  <button onClick={() => handleClick()} className="text-2xl text-center font-normal font-spartan transition-color ease-in duration-150 underline decoration-offSalmon-200  hover:decoration-salmon-800">¡Contactame!</button>
  {stateBar ?<div className={style.animate}>
    <div className="flex flex-col absolute top-2 justify-self-start bg-offSalmon-100 rounded p-4 transition-all divide-y divide-offSalmon-50 gap-2">
    <a href={LinkedinLink} target="_blank"> <button  className="text-2xl text-center font-normal gap-3 flex flex-row font-spartan transition-color ease-in duration-150 hover:text-salmon-800"><FaLinkedin/> Linkedin</button></a>
 <a href={MailLink} target="_blank"><button onClick={() => showSwal()} className="text-2xl text-center font-normal gap-3 flex flex-row font-spartan transition-color ease-in duration-150 hover:text-salmon-800"><IoIosMail/> Correo</button></a>
 <a href={CalendlyLink} target="_blank"><button className="text-2xl text-center font-normal gap-3 flex flex-row font-spartan transition-color ease-in duration-150 hover:text-salmon-800"><FaCalendarAlt/>Meeting</button></a>
  </div>
  </div> 
   :null
  }
  </div>
  
</div>
        
    </div>
  );
}