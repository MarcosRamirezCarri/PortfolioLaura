import Image from "next/image";
import { useEffect, useState } from "react";
import "../../../../../../node_modules/aos/dist/aos.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styleModal from "./CardProject.module.css";
import AOS from "aos";

export default function ProjectsCard({
  name,
  texto1,
  texto2,
  texto3,
  Empresa,
  Especialidad,
  image,
  link,
}) {
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
  return (
    <div className="w-full flex flex-col relative ">
      <h1
        data-aos="fade-right"
        className="text-lg lg:text-xl select-none flex flex-row gap-2 text-left self-start text-offSalmon-100 font-semibold font-spartan ml-4 lg:ml-16"
      >
        {Especialidad}
      </h1>
      <h1
        data-aos="fade-left"
        className={` lg:text-3xl select-none flex flex-row ${
          name.length > 25 ? "text-sm" : "text-xl"
        } gap-2 text-center self-start text-offSalmon-200 font-semibold font-spartan ml-4 lg:ml-16 mb-5`}
      >
        {name} |<p className="text-salmon-200">{Empresa}</p>
      </h1>
      <div className="flex flex-col lg:grid gap-2 w-[90%] lg:grid-cols-3 self-center ">
        <div
          data-aos="fade"
          className="bg-offSalmon-300 ring-2 ring-offSalmon-400 w-[100%] lg:w-[85%] lg:h-fit p-3 justify-self-center rounded flex flex-col"
        >
          <Image
            width={400}
            onClick={() => openModal(image)}
            height={400}
            alt="ProjectImg"
            src={image}
            className=" object-cover max-h-[40vh] lg:max-h-[55vh] select-none w-[90%] rounded self-center cursor-pointer ring-2 ring-offSalmon-400 hover:ring-offSalmon-600 hover:ring-3 transition-all duration-150"
          />
        </div>
        <div className="transparent rounded flex  col-span-2 flex-col gap-2 items-baseline ">
          <p
            data-aos="fade-left"
            className={` lg:text-2xl font-spartan ${
              name === "Comunicacion B2B" ? "text-md" : "text-lg"
            } text-offSalmon-100 text-justify`}
          >
            &apos;{texto1}&apos;
          </p>
          <p
            data-aos="fade-left"
            className={` lg:text-2xl font-spartan ${
              name === "Comunicacion B2B" ? "text-md" : "text-lg"
            } text-offSalmon-100 text-justify`}
          >
            &apos;{texto2}&apos;
          </p>
          <p
            data-aos="fade-left"
            className={` lg:text-2xl font-spartan ${
              name === "Comunicacion B2B" ? "text-md" : "text-lg"
            } text-offSalmon-100 text-justify`}
          >
            &apos;{texto3}&apos;
          </p>
          <a data-aos="fade-left" href={link} target="_blank">
            <p className="text-xl lg:text-3xl font-spartan text-salmon-200 text-justify relative top-2 lg:top-10 transition-color ease-in duration-150 underline decoration-[#0f0200] select-none  hover:decoration-salmon-300">
              Lee el artículo completo
            </p>
          </a>
        </div>
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
                  height={350}
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
