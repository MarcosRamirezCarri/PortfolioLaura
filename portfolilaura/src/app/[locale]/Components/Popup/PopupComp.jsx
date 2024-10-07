'use client'
import  { useState } from "react";
import PopupCard from "./Card/PopupCard";

const PopupMessages = [
    {
        id: 2,
        from: 'Manager',
        message: 'Laura es una excelente Profecional. Se ha desempeñado en la companía como redactora de forma muy profecional y comprometida.'
    },
    {
        id: 3,
        from: 'Manager',
        message: 'Laura Ha crecido en su performance, siempre esta atenta al feedback y a la mejora continua, Recomiendo 100%'
    }
]

const PopupComp = () => {
  const [showPopup, setShowPopup] = useState(true);


  const handlePopupComplete = () => {
    setShowPopup(false);
  };

  return (

   
        <PopupCard
          messages={PopupMessages}
          duration={15000} 
          onComplete={handlePopupComplete}
          showPopup={showPopup}
     
        />
  );
};

export default PopupComp;