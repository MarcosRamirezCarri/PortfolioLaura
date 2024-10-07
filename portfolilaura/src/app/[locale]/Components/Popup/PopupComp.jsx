'use client'
import  { useState } from "react";
import PopupCard from "./Card/PopupCard";

const PopupMessages = [
    {
        id: 2,
        from: 'Manager',
        message: 'Laura es una excelente profesional. Se ha desempañado en la compañía como redactora de forma muy profesional y comprometida.'
    },
    {
        id: 3,
        from: 'Manager',
        message: 'Laura ha crecido en su performance y siempre está atents al feedback y la mejora continua. La recomiendo 100%'
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