import Image from "next/image";
import { useEffect, useState } from 'react'
import '../../../../../../node_modules/aos/dist/aos.css'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import styleModal from './CardProject.module.css'
import AOS from "aos";

export default function ProjectsCard({name, texto1, texto2, texto3, Empresa, Especialidad, image, link}) {
  const [modalImage, setModalImage] = useState('')
  console.log(modalImage)

  const openModal = (imageUrl) => {
    setModalImage(imageUrl)
  };

  const closeModal = () => {
    setModalImage('')
  };
  
  useEffect(() => {
    AOS.init({duration: 1000})
  },[])
    return (
      <div className="w-full flex flex-col relative h-[70vh] ">
        <h1 data-aos='fade-right' className="text-xl select-none flex flex-row gap-2 text-left self-start text-offSalmon-100 font-semibold font-spartan ml-16">{Especialidad}</h1>
        <h1 data-aos='fade-left' className="text-3xl select-none flex flex-row gap-2 text-center self-start text-offSalmon-200 font-semibold font-spartan ml-16 mb-5">{name} |<p className="text-salmon-200">{Empresa}</p></h1>
        <div className="grid gap-2 w-[90vw] grid-cols-3 self-center ">
<div data-aos='fade' className="bg-offSalmon-300  w-fit h-fit p-3 rounded flex flex-col">
<Image width={400} onClick={() =>openModal(image)} height={400} alt="ProjectImg" src={image} className="h-96 select-none w-64 place-self-center cursor-pointer"/>
</div>
<div className="transparent rounded flex  col-span-2 flex-col gap-2 items-baseline ">
<p data-aos='fade-left'  className="text-2xl font-spartan text-offSalmon-100 text-justify">&apos;{texto1}&apos;</p>
<p data-aos='fade-left'  className="text-2xl font-spartan text-offSalmon-100 text-justify">&apos;{texto2}&apos;</p>
<p data-aos='fade-left'  className="text-2xl font-spartan text-offSalmon-100 text-justify">&apos;{texto3}&apos;</p>
<a data-aos='fade-left'  href={link} target="_blank">
  <p className="text-3xl font-spartan text-salmon-200 text-justify relative top-10 transition-color ease-in duration-150 underline decoration-[#0f0200] select-none  hover:decoration-salmon-300">Lee el articulo completo</p>
  </a>
</div>
        </div>
        {modalImage !== '' && 
           <div className={styleModal.modal}>
           <div className={styleModal.modalContent}>
             <span className={styleModal.close} onClick={closeModal}>x</span>
             <TransformWrapper defaultScale={1} defaultPositionX={200} defaultPositionY={200}>
               <TransformComponent>
                 <Image id="modalImage" src={modalImage} as="image" className={styleModal.modalImage} alt='phProyect' width={350} height={550}  />
               </TransformComponent>
             </TransformWrapper>
           </div>
         </div>
          }
      </div>
    );
  }