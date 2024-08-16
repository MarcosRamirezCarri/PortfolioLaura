'use client'
import  { useState } from "react";
import PopupCard from "./Card/PopupCard";

const PopupMessages = [
    {
        id: 1,
        from: 'Manager',
        message: 'Nos gustó mucho lo que elaboraste y nos gustaría que puedas continuar con estos contenidos'
    },
    {
        id: 2,
        from: 'Manager',
        message: 'Laura es una excelente Profecional. Se ha desempeñado en Sabio Marketing como redactora de forma muy profecional y comprometida.'
    },
    {
        id: 3,
        from: 'Manager',
        message: 'Laura Ha crecido en su performance, siempre esta atenta al feedback y a la mejora continua, Recomiendo 100%'
    }
]

const PopupComp = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handlePopupComplete = () => {
    setShowPopup(false); // Ocultar el popup cuando todos los mensajes se hayan mostrado
  };

  return (

   
        <PopupCard
          messages={PopupMessages}
          duration={15000} // Duración para cada mensaje en milisegundos
          onComplete={handlePopupComplete}
          showPopup={showPopup}
     
        />
  );
};

export default PopupComp;