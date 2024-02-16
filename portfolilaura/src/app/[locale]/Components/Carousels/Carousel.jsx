'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

export default function Carousel() {
    return (
      <div className="w-full h-[60vh] flex flex-col relative top-28 gap-10">
        <div  className='bg-gradient-to-l from-black to-offSalmon-950  w-full h-[50vh] absolute  skew-y-[-3deg] -z-[999]'></div>
        <h1 className="text-4xl flex flex-row gap-2 text-center self-center text-offSalmon-200 font-semibold font-spartan">Otros trabajos mios</h1>
        <Swiper
        effect={'cube'}
        grabCursor={true}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="h-36 w-36"
      >
        <SwiperSlide>
          <Image src="" width={400} height={400} />
        </SwiperSlide>
  
      </Swiper>
      </div>
    );
  }
  