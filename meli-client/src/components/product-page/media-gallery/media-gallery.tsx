"use client";
import { useEffect, useMemo, useState } from "react";
import "./media-gallery.scss";
import React from "react";
import { useMediaQuery } from "usehooks-ts";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Props {
  medias: string[];
  productTitle: string;
}

function getAltText(index: number, max: number, productTitle: string) {
  return `Imagen ${index + 1} de ${max} de ${productTitle}`;
}

export default function MediaGallery({ medias, productTitle }: Props) {
  const [isMobile, setIsMobile] = useState<boolean | null>(true);
  const matchesMediaQuery = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsMobile(matchesMediaQuery);
  }, [matchesMediaQuery]);

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const currentMediaUrl = medias[currentMediaIndex];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const maxMediaAmount = isMobile ? 3 : 7;
  const biggerThanMax = medias.length > maxMediaAmount;
  const isOnLastMedia = currentMediaIndex == medias.length - 1;
  const isOnFirstMedia = currentMediaIndex == 0;
  const excedingAmount = medias.length - maxMediaAmount;

  function changeCurrentImage(mediaIndex: number) {
    setCurrentMediaIndex(mediaIndex);
  }

  const displayMedias = biggerThanMax
    ? medias.slice(0, maxMediaAmount)
    : medias;

  function nextImage() {
    const nextMediaIndex = currentMediaIndex + 1;
    if (!isOnLastMedia) {
      setCurrentMediaIndex(nextMediaIndex);
    }
  }

  function previousImage() {
    const nextMediaIndex = currentMediaIndex - 1;
    if (!isOnFirstMedia) {
      setCurrentMediaIndex(nextMediaIndex);
    }
  }

  return (
    <div className="media-gallery">
      <ul className="media-gallery__list">
        {displayMedias.map((mediaUrl, index) => (
          <li className="media-gallery__item" key={mediaUrl}>
            <button
              className={`media-gallery__thumb ${
                currentMediaUrl == mediaUrl
                  ? "media-gallery__thumb--selected"
                  : ""
              }`}
              onMouseOver={() => changeCurrentImage(index)}
              onClick={() => changeCurrentImage(index)}
            >
              <img
                src={mediaUrl}
                alt={getAltText(index, medias.length, productTitle)}
              />
            </button>
          </li>
        ))}
        {biggerThanMax && (
          <li
            className="media-gallery__item"
            onClick={() => setIsModalOpen(true)}
          >
            <button
              className="media-gallery__thumb"
              aria-label={`Ver mas ${excedingAmount} imagenes de ${productTitle}`}
            >
              +{excedingAmount}
            </button>
          </li>
        )}
      </ul>
      <div className="media-gallery__image">
        <img src={currentMediaUrl} alt={productTitle} />
      </div>
      {isModalOpen && (
        <div
          className="media-gallery__modal"
          role="dialog"
          aria-hidden={!isModalOpen}
        >
          <div className="media-gallery__modal-content">
            <button
              className="media-gallery__modal-close-button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            {!isOnFirstMedia && (
              <button
                className="media-gallery__modal-button"
                onClick={previousImage}
              >
                <ChevronLeft size={16} />
              </button>
            )}
            <div className="media-gallery__modal-image">
              <img src={currentMediaUrl}></img>
            </div>
            {!isOnLastMedia && (
              <button
                className="media-gallery__modal-button"
                onClick={nextImage}
              >
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
