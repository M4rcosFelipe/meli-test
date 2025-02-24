"use client";

import "./first-time-message.scss";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { HAS_VISITED_KEY } from "@/constants/local-storage-keys";

export default function FirstTimeMessage() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMessage() {
    setIsOpen(false);
  }

  useEffect(() => {
    const visited = localStorage.getItem(HAS_VISITED_KEY);

    if (!visited) {
      localStorage.setItem(HAS_VISITED_KEY, "true");
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
