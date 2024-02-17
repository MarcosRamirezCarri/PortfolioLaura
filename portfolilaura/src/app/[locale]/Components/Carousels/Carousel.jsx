'use client';
import Image from 'next/image';
import { CarouselImg } from '../../Mocks/carouselesMock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

export default function Carousel() {
  const carouselAll = [...CarouselImg]
    return (
      <div className="w-full flex flex-col relative top-28 gap-10">
        <div  className='bg-gradient-to-l from-black to-offSalmon-950  w-full h-[50vh] absolute  skew-y-[-3deg] -z-[999]'></div>
        <h1 className="text-4xl flex flex-row gap-2 text-center self-center text-offSalmon-200 font-semibold font-spartan">Otros trabajos mios</h1>
        <div className='grid grid-cols-2 gap-12 place-items-center'>
        {carouselAll && carouselAll.map((car) => 
        <div className='bg-offSalmon-200 flex flex-col  p-5 max-w-80 rounded' key={car.id}>
<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        pagination={true}
        navigation={true}
        slidesPerView={'auto'}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
         
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        className='h-72 w-[100%]'
      >
        {car.imagenes.map((img, index) => <SwiperSlide key={index} className='ring-2 ring-offSalmon-100 flex flex-col p-2 w-[80%]'>
          <Image  src={img} className='rounded relative self-center' width={580} height={500} />
        </SwiperSlide>
)}  
      </Swiper>
        </div>
        
        ) }
        </div>
        
      </div>
    );
  }
  