"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CarouselImg } from "../../Mocks/carouselesMock";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styleModal from "./Carousel.module.css";
import "../../../../../node_modules/aos/dist/aos.css";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  const [modalImage, setModalImage] = useState("");
  console.log(modalImage);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage("");
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const carouselAll = [...CarouselImg];
  return (
    <div className="w-full flex flex-col relative gap-10">
      <div className="bg-gradient-to-l from-black to-offSalmon-950  w-full h-[70vh] absolute  skew-y-[-3deg] -z-[999]"></div>
      <h1
        data-aos="fade-left"
        className="text-xl lg:text-4xl flex flex-row gap-2 text-center self-center text-offSalmon-200 font-semibold font-spartan"
      >
        Otros trabajos
      </h1>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 lg:place-self-center">
        {carouselAll &&
          carouselAll.map((car) => (
            <div
              data-aos="fade-up"
              className="bg-offSalmon-300  relative flex flex-col gap-3 py-5 px-2 m-5 lg:max-h-96 lg:max-w-[30vw] rounded"
              key={car.id}
            >
              <Swiper
                effect={"coverflow"}
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
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  EffectCoverflow,
                ]}
                className="h-80 w-[100%]"
              >
                {car.imagenes.map((img, index) => (
                  <SwiperSlide key={index} className=" flex flex-col p-2 ">
                    <Image
                      onClick={() => openModal(img)}
                      src={img}
                      className="rounded ring-2 ring-offSalmon-100 relative self-center h-[100%] w-[100%] cursor-pointer"
                      width={780}
                      height={700}
                      alt="PhCarousel"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="text-xl font-spartan [text-shadow:_1px_7px_17px_rgba(0,0,0,0.77)] text-center text-offSalmon-950">
                {car.work}
              </p>
              {car.link ? <a className='self-center' href={car.link} target="_blank" >
                <p className=" text-center text-lg lg:text-xl font-spartan text-offSalmon-950 text-justify transition-color ease-in duration-150 underline decoration-offSalmon-300  select-none  hover:decoration-offSalmon-950">
                  Ir al Articulo
                </p>
              </a>

              : null}
            </div>
          ))}
      </div>
      {modalImage !== "" && (
        <div className={styleModal.modal}>
          <div onClick={closeModal} className={styleModal.modalContent}>
            <TransformWrapper
              defaultScale={1}
              defaultPositionX={200}
              defaultPositionY={200}
            >
              <TransformComponent>
                <div onClick={(e) => e.stopPropagation()}>
                  <Image
                    id="modalImage"
                    src={modalImage}
                    as="image"
                    className={styleModal.modalImage}
                    alt="phProyect"
                    width={450}
                    height={450}
                  />
                </div>
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      )}
    </div>
  );
}
