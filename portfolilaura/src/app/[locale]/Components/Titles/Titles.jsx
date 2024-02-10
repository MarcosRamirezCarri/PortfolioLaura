'use client'
import { LuGraduationCap } from "react-icons/lu";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";
import CorderHCertificate from '../../../../Data/CoderHouseCertificate.jpg'
import LetterCertificate from '../../../../Data/LetterCertificate.png'
import '../../../../../node_modules/aos/dist/aos.css'

export default function Titles() {
  useEffect(() => {
    AOS.init({duration: 2000})
  },[])
    return (
      <div className="w-[100vw] h-[70vh] gap-2 relative flex flex-col top-24 z-[5]">
  <h1 data-aos='fade-up' className="text-5xl flex flex-row gap-2 text-center self-center text-offSalmon-200 font-bold font-spartan">Educación<LuGraduationCap></LuGraduationCap> </h1>
  <div data-aos='fade' className="w-[75vw] h-[60vh] grid relative grid-cols-2 place-self-center gap-24">
  <div className="bg-offSalmon-600 rounded flex flex-col content-left p-5 gap-5">
    <Image width={200} height={200} className="h-44 w-48 rounded ring-2 ring-offSalmon-300 place-self-center" src={LetterCertificate}/>
  <p className="text-3xl text-left text-offSalmon-100 font-bold font-spartan">Profesorado en Letras</p>
  <p className="text-3xl text-left text-offSalmon-100 font-bold font-spartan">Universidad Nacional del Litoral</p>
<p className="text-3xl text-left  text-offSalmon-100 font-bold font-spartan">Egreso: 2021</p>
</div>
<div data-aos='fade' className="bg-offSalmon-600 flex flex-col content-left rounded p-5 gap-5">
<Image width={200} height={200} className="h-44 w-48 rounded ring-2 ring-offSalmon-300 place-self-center" src={CorderHCertificate}/>
<p className="text-3xl text-left text-offSalmon-100 font-bold font-spartan">Copywriting</p>
  <p className="text-3xl text-left text-offSalmon-100 font-bold font-spartan">Coderhouse</p>
<p className="text-3xl text-left text-offSalmon-100 font-bold font-spartan">Egreso: 2022</p>
</div>
  </div>
 
      </div>
    );
  }