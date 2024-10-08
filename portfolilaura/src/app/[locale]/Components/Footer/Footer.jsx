"use client";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Swal from "sweetalert2";

export default function Footer() {
  const showSwal = () => {
    Swal.fire({
      title: "Redirigiendo a su correo",
      icon: "success",
    });
  };

  const LinkedinLink =
    "https://www.linkedin.com/in/laura-ram%C3%ADrez-carrivali-846a0a228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  const MailLink = "mailto:lauraramirezcarrivali@gmail.com";
  const CalendlyLink = "https://calendly.com/lauramirezcarri";

  const marcosLinkedin =
    "https://www.linkedin.com/in/marcos-nicolas-ramirez-carrivali-b8bb77253/";
  const marcosGithub = "https://github.com/MarcosRamirezCarri";
  return (
    <div className="w-full h-[17vh] flex flex-row bg-offSalmon-800 relative overflow-x-hidden py-5 overflow-y-hidden gap-10 place-self-end justify-around px-5 py-1 select-none">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5 justify-center">
          <a href={LinkedinLink} target="_blank">
            {" "}
            <button className="text-2xl lg:text-4xl text-salmon-950 text-center font-normal gap-3 flex flex-row font-spartan transition-color ease-in duration-150 hover:text-salmon-200">
              <FaLinkedin />{" "}
            </button>
          </a>
          <a href={MailLink} target="_blank">
            <button
              onClick={() => showSwal()}
              className="text-2xl lg:text-4xl text-salmon-950 text-center font-normal gap-3 flex flex-row font-spartan transition-color ease-in duration-150 hover:text-salmon-200"
            >
              <IoIosMail />
            </button>
          </a>
          <a href={CalendlyLink} target="_blank">
            <button className="text-2xl lg:text-4xl text-salmon-950 text-center font-normal gap-3 flex flex-row font-spartan transition-color ease-in duration-150 hover:text-salmon-200">
              <FaCalendarAlt />
            </button>
          </a>
        </div>
        <p className="text-offSalmon-100 text-sm lg:text-lg font-medium font-spartan">
          © 2024 Laura Ramirez Carrivali Todos los derechos reservados
        </p>
      </div>
      <div className="flex flex-col gap-5">
      
        <div className="flex flex-row gap-5 justify-center">
          <a href={marcosLinkedin} target="_blank">
            {" "}
            <button className="text-2xl lg:text-4xl text-salmon-950 text-center font-normal gap-3 flex flex-row font-spartan transition-color ease-in duration-150 hover:text-salmon-200">
              <FaLinkedin />{" "}
            </button>
          </a>
          <a href={marcosGithub} target="_blank">
            {" "}
            <button className="text-2xl lg:text-4xl text-salmon-950 text-center font-normal gap-3 flex flex-row font-spartan transition-color ease-in duration-150 hover:text-salmon-200">
              <FaGithub />{" "}
            </button>
          </a>
        </div>
        <p className="text-offSalmon-100 text-sm lg:text-lg font-medium font-spartan ">
          Portfolio creado por Marcos Ramirez Carrivali
        </p>
      </div>
    </div>
  );
}
