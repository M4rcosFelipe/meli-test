"use client";

import { X } from "lucide-react";
import "./first-time-message.scss";
import { useEffect, useState } from "react";

export default function FirstTimeMessage() {
  console.log("rendered");
  const [isOpen, setIsOpen] = useState(false);

  function closeMessage() {
    localStorage.setItem("visited", "true");
    setIsOpen(false);
  }

  useEffect(() => {
    const visited = localStorage.getItem("visited");

    if (!visited) {
      localStorage.setItem("visited", "true");
      setIsOpen(true);
    }
  }, []);

  return (
    isOpen && (
      <div className="first-time-message">
        <div className="first-time-message__arrow"></div>
        <div className="first-time-message__content">
          <div className="first-time-message__text">
            <p className="first-time-message__title">Hola</p>
            <p className="first-time-message__description">
              Para realizar búsquedas, solo debes ingresar el nombre de lo que
              necesites. Pueden ser productos, marcas y mas...
            </p>
          </div>
          <button
            className="first-time-message__close-button"
            onClick={closeMessage}
          >
            <X size={20} />
          </button>
        </div>
      </div>
    )
  );
}
