'use client'
import { lazy, useState } from "react";
import	LauraLogo from '../../../../Data/LogoLaura.png'
import Image from "next/image";
import style from './NavBar.module.css'

export default function NavBar() {
  const [stateBar, setStateBar] = useState(false)
  console.log(stateBar)

  const handleClick = () =>{
    if( stateBar === false){
      setStateBar(true)
    } 
    if( stateBar === true){
      setStateBar(false)
    }
  }
  return (
    <div className="fixed w-[100vw] h-28 bg-offSalmon-200 flex flex-row shadow-sm justify-between shadow-salmon-200 p-3 z-[100]">
        <div className="flex flex-col place-self-start relative left-4">
          <div className="flex flex-row gap-2 ">
          <p className="text-5xl text-center self-end text-offSalmon-950 font-bold font-spartan">LAURA </p>
          <div className="flex flex-col">
          <p className="text-3xl text-center font-semibold text-offSalmon-800 font-spartan">RAMIREZ </p>
          <p className="text-3xl text-center font-semibold text-offSalmon-800 font-spartan">CARRIVALI</p>
          </div>
          </div>
        
      <p className="text-lg text-center font-semibold font-spartan">Profesora de letras y copyrighter</p>
        </div>
        <div>
          <Image className="rounded-full h-32 w-32 p-2 bg-offSalmon-300 ring-8 ring-offSalmon-200" src={LauraLogo} width={300} height={300}/>
        </div>
<div className="flex flex-row relative gap-20 justify-self-end right-4">
  <button className="text-2xl text-center font-normal font-spartan transition-color ease-in duration-150 underline decoration-offSalmon-200  hover:decoration-salmon-800">Sobre mi</button>
  <button className="text-2xl text-center font-normal font-spartan transition-color ease-in duration-150 underline decoration-offSalmon-200  hover:decoration-salmon-800 ">Mis proyectos</button>
  <div className="flex flex-col self-center">
  <button onClick={() => handleClick()} className="text-2xl text-center font-normal font-spartan transition-color ease-in duration-150 underline decoration-offSalmon-200  hover:decoration-salmon-800">Contactame!</button>
  {stateBar ?<div className={style.animate}>
    <div className="flex flex-col absolute top-2 bg-offSalmon-100 rounded p-4 transition-all divide-y divide-offSalmon-50 gap-2">
<p className="text-2xl text-center font-normal font-spartan">linkedin</p>
<p className="text-2xl text-center font-normal font-spartan">Instagram</p>
<p className="text-2xl text-center font-normal font-spartan">Correo</p>
  </div>
  </div> 
   :null
  }
  </div>
  
</div>
        
    </div>
  );
}