'use client'
import { LuGraduationCap } from "react-icons/lu";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import styleModal from './Titles.module.css'
import AOS from "aos";
import { useEffect, useState } from "react";
import Image from "next/image";
import CorderHCertificate from '../../../../Data/CoderHouseCertificate.jpg'
import LetterCertificate from '../../../../Data/LetterCertificate.png'
import '../../../../../node_modules/aos/dist/aos.css'

export default function Titles() {
  const [modalImage, setModalImage] = useState('')
  console.log(modalImage)

  const openModal = (imageUrl) => {
    setModalImage(imageUrl)
  };

  const closeModal = () => {
    setModalImage('')
  };

  useEffect(() => {
    AOS.init({duration: 2500})
  },[])
    return (
      <div className="w-[100vw] h-[70vh] gap-2 relative flex flex-col top-24">
  <h1 data-aos='fade-up' className="text-5xl flex flex-row gap-2 text-center self-center text-offSalmon-200 font-semibold font-spartan">Educación<LuGraduationCap></LuGraduationCap> </h1>
  <div data-aos='fade' className="w-[75vw] h-[60vh] grid relative grid-cols-2 place-self-center gap-24">
  <div className="bg-offSalmon-300 rounded flex flex-col content-left p-5 gap-5">
    <Image width={200}  onClick={() =>openModal(LetterCertificate)}  height={200} className="h-44 w-48 rounded ring-2 ring-offSalmon-400 place-self-center cursor-pointer" src={LetterCertificate}/>
  <p className="text-3xl text-left text-black font-semibold [text-shadow:_1px_7px_17px_rgba(0,0,0,0.77)] font-spartan">Profesorado en Letras</p>
  <p className="text-3xl text-left text-salmon-950 font-medium font-spartan">Universidad Nacional del Litoral</p>
<p className="text-3xl text-left  text-salmon-950 font-medium font-spartan">Egreso: 2021</p>
</div>
<div data-aos='fade' className="bg-offSalmon-300 flex flex-col content-left rounded p-5 gap-5">
<Image width={200} onClick={() =>openModal(CorderHCertificate)} height={200} className="h-44 w-48 rounded ring-2 ring-offSalmon-300 place-self-center cursor-pointer" src={CorderHCertificate}/>
<p className="text-3xl text-left text-black font-semibold [text-shadow:_1px_7px_17px_rgba(0,0,0,0.77)] font-spartan">Copywriting</p>
  <p className="text-3xl text-left text-salmon-950 font-medium font-spartan">Coderhouse</p>
<p className="text-3xl text-left text-salmon-950 font-medium font-spartan">Egreso: 2022</p>
</div>
  </div>
  {modalImage !== '' && 
           <div className={styleModal.modal}>
           <div className={styleModal.modalContent}>
             <span className={styleModal.close} onClick={closeModal}>x</span>
             <TransformWrapper defaultScale={1} defaultPositionX={200} defaultPositionY={200}>
               <TransformComponent>
                 <Image id="modalImage" src={modalImage} as="image" className={styleModal.modalImage} alt='phProyect' width={ 750} height={550}  />
               </TransformComponent>
             </TransformWrapper>
           </div>
         </div>
          }
      </div>
    );
  }