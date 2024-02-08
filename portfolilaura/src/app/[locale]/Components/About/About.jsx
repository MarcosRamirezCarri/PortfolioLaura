import Image from "next/image";
import style from './About.module.css'
import Laura from '../../Data/Laura.png'

export default function About() {
    return (
      <div className="h-[70vh] w-[100vw] relative top-32 flex flex-col -z-[10]  ">
     <div className="grid grid-cols-2 gap-5 h-[60vh] w-[90vw] relative place-self-center">
           <div className={style.leftSection}>
           <div className="flex flex-col bg-offSalmon-800 p-5 rounded">
        <Image src={Laura} width={400} height={400} className="h-96 w-96 rounded-xl ring-1 ring-black relative self-center"/>
     </div>
           </div>
           <div className={style.rightSection}>
           <div className="bg-offSalmon-800 rounded grid grid-cols-2 p-5 gap-3">
    <div className="col-span-2">
      <div className={style.titleFade}>
      <h1 className="text-8xl font-spartan text-salmon-300">Hola gente</h1>
      </div>    
    </div>
   <div className={style.lettersFade}>
<p className="text-xl font-spartan text-offSalmon-100 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem eos nulla commodi animi iure laboriosam vel, quam culpa sapiente deserunt dignissimos voluptatem repellat! Voluptatem repellat laudantium sit sint mollitia.</p>
   </div>
   <div className={style.lettersFade}>
<p className="text-xl font-spartan text-offSalmon-100 text-justify" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet mollitia necessitatibus at ab minima cumque! Nostrum labore at suscipit aut rerum eveniet deleniti molestiae, dignissimos a enim pariatur, vitae maiores.</p>
   </div>
  </div>
   </div>      
     </div>
      </div>
    );
  }