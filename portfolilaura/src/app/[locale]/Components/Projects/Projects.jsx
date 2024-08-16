'use client'
import { projects } from '../../Mocks/projectsMock'
import { useEffect } from 'react'
import ProjectsCard from './CardProject/CardProject';
import '../../../../../node_modules/aos/dist/aos.css'
import AOS from "aos";

export default function Projects() {
  useEffect(() => {
    AOS.init({duration: 2500})
  },[])

  const allProjects = [...projects]

    return (
      <div className="w-full flex flex-col relative gap-10">
      <h1 data-aos='fade-up' className="text-2xl lg:text-3xl flex flex-row gap-2 text-center self-center text-offSalmon-200 font-semibold font-spartan">Mis Copys </h1>
   <div className='flex flex-col gap-[7rem]'>
   {allProjects && allProjects.map((oneProject, index) =>
      <div  key={index} >
<ProjectsCard 
     link={oneProject.link}
      name={oneProject.name}
  Empresa={oneProject.Empresa}
  Especialidad={oneProject.Especialidad}
  texto1={oneProject.texto1}
  texto2={oneProject.texto2}
  texto3={oneProject.texto3}
  image={oneProject.image}
  />
      </div>
    )
    }  
   </div>

  
       </div>

    
    );
  }