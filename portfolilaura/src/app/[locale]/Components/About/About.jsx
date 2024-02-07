import Image from "next/image";
import Laura from '../../Data/Laura.png'

export default function About() {
    return (
      <div className="h-[70vh] w-[100vw] bg-black relative top-28 grid grid-cols-2 -z-[10]">
     <div className="place-content-center flex flex-col">
        <Image src={Laura} width={400} height={400} className="h-96 w-96"/>
     </div>
  <div>
    Sobre
  </div>
      </div>
    );
  }