import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
    return (
      <div className="w-full h-[17vh] flex flex-row bg-offSalmon-950 relative overflow-x-hidden mt-44 overflow-y-hidden gap-10 place-self-end justify-around z-[-3] p-5">
       <div className="flex flex-col gap-5">
        <p className="text-offSalmon-100">© 2024 Laura Ramirez Carrivali Todos los derechos reservados</p>
       <div className="flex flex-row gap-5 justify-center">
       <FaLinkedin className="text-salmon-100 text-3xl cursor-pointer"/>
        <FaInstagram className="text-salmon-100 text-3xl cursor-pointer"/>
        <IoIosMail className="text-salmon-100 text-3xl cursor-pointer"/>
        </div>
       </div>
       <div className="flex flex-col gap-5">
       <p className="text-offSalmon-100">Protfolio creado por Marcos Ramirez</p>
       <div className="flex flex-row gap-5 justify-center">
       <FaLinkedin className="text-salmon-100 text-3xl cursor-pointer"/>
       <FaGithub className="text-salmon-100 text-3xl cursor-pointer"/>
       </div>
       </div>
      </div>
    );
  }