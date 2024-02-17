'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CarouselImg } from '../../Mocks/carouselesMock';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import styleModal from './Carousel.module.css'
import '../../../../../node_modules/aos/dist/aos.css'
import AOS from "aos";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, EffectCoverflow , A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel() {
  const [modalImage, setModalImage] = useState('')
  console.log(modalImage)

  const openModal = (imageUrl) => {
    setModalImage(imageUrl)
  };

  const closeModal = () => {
    setModalImage('')
  };
  useEffect(() => {
    AOS.init({duration: 1000})
  },[])
  const carouselAll = [...CarouselImg]
    return (
      <div className="w-full flex flex-col relative top-36 gap-10">
        <div  className='bg-gradient-to-l from-black to-offSalmon-950  w-full h-[70vh] absolute  skew-y-[-3deg] -z-[999]'></div>
        <h1 data-aos='fade-left' className="text-4xl flex flex-row gap-2 text-center self-center text-offSalmon-200 font-semibold font-spartan">Otros trabajos mios</h1>
        <div className='grid grid-cols-2 gap-5 place-items-center'>
        {carouselAll && carouselAll.map((car) => 
        <div data-aos='fade-up' className='bg-offSalmon-300 flex flex-col  py-5 px-2 max-h-96 max-w-[30vw] rounded' key={car.id}>
<Swiper
        effect={'coverflow'}
        centeredSlides={false}
        pagination={true}
        navigation={true}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 90,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
         
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        className='h-80 w-[100%]'
      >
        {car.imagenes.map((img, index) => <SwiperSlide key={index} className='ring-2 ring-offSalmon-100 flex flex-col p-2 h-[100%] w-[100%]'>
          <Image onClick={() =>openModal(img)}  src={img} className='rounded relative self-center cursor-pointer' width={580} height={500} />
        </SwiperSlide>
)}  
      </Swiper>
        </div>
        
        ) }
        </div>
        {modalImage !== '' && 
           <div className={styleModal.modal}>
           <div className={styleModal.modalContent}>
             <span className={styleModal.close} onClick={closeModal}>x</span>
             <TransformWrapper defaultScale={1} defaultPositionX={200} defaultPositionY={200}>
               <TransformComponent>
                 <Image id="modalImage" src={modalImage} as="image" className={styleModal.modalImage} alt='phProyect' width={350} height={550}  />
               </TransformComponent>
             </TransformWrapper>
           </div>
         </div>
          }
      </div>
    );
  }
  