"use client";
import React, { useState, useEffect } from "react";

const PopupCard = ({ messages, duration, onComplete, showPopup }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const timer = setTimeout(() => {
        setIsAnimating(true);

        setTimeout(() => {
          setIsAnimating(false);
          setCurrentMessageIndex((prevIndex) => prevIndex + 1);
        }, 500); // Duración de la animación
      }, duration);

      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [currentMessageIndex, messages.length, duration, onComplete]);

  if (currentMessageIndex >= messages.length) {
    onComplete();
    return null;
  }

  return (
    <div
      className={`flex bg-offSalmon-500 px-2 py-3 rounded-[1rem] ring-2 ring-offSalmon-300 rounded-br-none w-[80%] lg:w-[40%] h-fit z-[101] flex-col fixed bottom-5 right-2 lg:right-24 transition-all duration-500 delay-100 ${
        showPopup
          ? `${
              isAnimating ? " translate-x-[100vw] lg:translate-x-[50vw]" : "translate-x-[0vw]"
            } translate-x-[0vw]`
          : "translate-x-[100vw] lg:translate-x-[50vw]"
      }`}
    >
      <div className="font-spartan gap-2 text-lg font-medium text-offSalmon-950 flex flex-row">
        Recomendacion de:<p>{messages[currentMessageIndex].from}</p>{" "}
      </div>
      <p className="font-spartan gap-2 text-md lg:text-lg font-normal text-offSalmon-950">
      &ldquo;{messages[currentMessageIndex].message}&rdquo;
      </p>
    </div>
  );
};

export default PopupCard;
