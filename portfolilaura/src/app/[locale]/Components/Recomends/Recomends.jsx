'use client'
import Image from "next/image";
import AOS from "aos";
import "../../../../../node_modules/aos/dist/aos.css";
import {  useEffect } from "react";

const Recomend = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    let image = 'https://res.cloudinary.com/dljgbq48k/image/upload/v1723917639/WhatsApp_Image_2024-08-16_at_20.54.08_lbsems.jpg'
  return (
    <div className="flex flex-col w-[100%] items-center justify-center gap-10">
        <p  data-aos="fade-left"  className="text-xl lg:text-2xl flex flex-row gap-2 text-left self-center text-offSalmon-100 font-semibold font-spartan" >Mis Recomendaciones</p>
      <div data-aos="fade-right" className="bg-offSalmon-300 py-2 px-4 rounded-xl">
<Image width={650} className="w-[100%] h-[100%] rounded ring-2 ring-offSalmon-400" height={500} src={image}/>
      </div>
    </div>
  );
};

export default Recomend;
