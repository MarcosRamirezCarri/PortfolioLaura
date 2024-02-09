import Image from "next/image";
import style from './About.module.css'
import Laura from '../../../../Data/Laura.png'
import Scrollnav from "./Scrollnav/Scrollnav";

export default function About() {
    return (
      <div className="h-[80vh] w-[100vw] relative top-32 flex flex-col -z-[10]  ">
     <div className="grid grid-cols-2 gap-5 h-[60vh] w-[90vw] relative place-self-center">
           <div className={style.leftSection}>
           <div className="flex flex-col bg-offSalmon-800 p-5 rounded">
        <Image src={Laura} width={200} height={300} className="h-96 w-96 rounded relative self-center"/>
     </div>
           </div>
           <div className={style.rightSection}>
           <div className="bg-offSalmon-800 rounded grid grid-cols-2 p-4 gap-5">
    <div className="col-span-2">
      <div className={style.titleFade}>
      <h1 className="text-5xl font-spartan text-salmon-300">Hola! Mi nombre es Laura</h1>
      </div>    
    </div>
   <div className={style.lettersFade}>
<p className="text-xl font-spartan text-offSalmon-100 text-justify">Soy Profesora de Letras, me recibí en la Universidad del Litoral, y ahí fue donde aprendí todo lo que sé sobre el inconmensurable mundo de las letras.  
Una de mis pasiones es la docencia, donde estoy orgullosa de decir que cuento con casi 6 años de experiencia en la enseñanza y las prácticas educativas.</p>
   </div>
   <div className={style.lettersFade}>
<p className="text-xl font-spartan text-offSalmon-100 text-justify" >Disfruto de tener una relación estrecha con la escritura; por eso, estudié Copywriting para redes sociales. Esto me dio la posibilidad de ejercer la redacción en diferentes rubros, desde hace poco más de 2 años.</p>
   </div>
  </div>
   </div>      
     </div>
     <Scrollnav/>
      </div>
    );
  }