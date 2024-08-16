"use client";
import Image from "next/image";
import style from "./About.module.css";
import AOS from "aos";
import { useEffect } from "react";
import "../../../../../node_modules/aos/dist/aos.css";
import Laura from "../../../../Data/Laura.png";
import Scrollnav from "./Scrollnav/Scrollnav";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-[100%] relative lg:top-32 flex flex-col z-[10] select-none">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 w-[90%] relative place-self-center">
        <div className={style.leftSection}>
          <div className="flex flex-col  bg-offSalmon-900 p-5 rounded">
            <Image
              src={Laura}
              width={400}
              height={600}
              className="h-[80%] w-[70%] lg:h-[70%] lg:w-[60%]   rounded-xl relative ring-2 ring-offSalmon-800 self-center"
              alt="PhLaura"
            />
          </div>
        </div>
        <div className={style.rightSection}>
          <div className="bg-offSalmon-900 rounded flex flex-col lg:grid lg:grid-cols-2 p-4 gap-5">
            <div className="col-span-2">
              <div className={style.titleFade}>
                <h1 className="text-2xl lg:text-5xl font-spartan text-offSalmon-300">
                  ¡Hola! soy Laura
                </h1>
              </div>
            </div>
            <div className={style.lettersFade}>
              <p className="text-md lg:text-lg font-spartan text-offSalmon-100 text-justify">
                Soy Profesora de Letras, me recibí en la Universidad del
                Litoral, y ahí fue donde aprendí todo lo que sé sobre el
                inconmensurable mundo de las letras. Una de mis pasiones es la
                docencia, donde estoy orgullosa de decir que cuento con casi 6
                años de experiencia en la enseñanza y las prácticas educativas.
              </p>
            </div>
            <div className={style.lettersFade}>
              <p className="text-lg font-spartan text-offSalmon-100 text-justify">
                Disfruto de tener una relación estrecha con la escritura; por
                eso, estudié Copywriting para redes sociales. Esto me dio la
                posibilidad de ejercer la redacción en diferentes rubros, desde
                hace poco más de 2 años.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center invisible lg:visible">
        <Scrollnav />
      </div>
    </div>
  );
}
