"use client";
import "./media-gallery.scss";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { getImageUrlByMediaId } from "@/utils/images";
import Image from "next/image";

import dynamic from "next/dynamic";

const MediaGalleryModal = dynamic(
  () => import("./media-gallery-modal/media-gallery-modal"),
  { ssr: false }
);

interface Props {
  medias: string[];
  productTitle: string;
}

function getAltText(index: number, max: number, productTitle: string) {
  return `Imagen ${index + 1} de ${max} de ${productTitle}`;
}

export default function MediaGallery({ medias, productTitle }: Props) {
  const [isMobile, setIsMobile] = useState<boolean | null>(true);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const matchesMediaQuery = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsMobile(matchesMediaQuery);
  }, [matchesMediaQuery]);

  const currentMediaUrl = medias[currentMediaIndex];
  const maxMediaAmount = isMobile ? 3 : 7;
  const biggerThanMax = medias.length > maxMediaAmount;

  const excedingAmount = medias.length - maxMediaAmount;

  function changeCurrentImage(mediaIndex: number) {
    setCurrentMediaIndex(mediaIndex);
  }

  const displayMediaThumbs = biggerThanMax
    ? medias.slice(0, maxMediaAmount)
    : medias;

  return (
    <div className="media-gallery">
      <ul className="media-gallery__list">
        {displayMediaThumbs.map((mediaUrl, index) => (
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
                src={getImageUrlByMediaId(mediaUrl, "small")}
                alt={getAltText(index, medias.length, productTitle)}
              />
            </button>
          </li>
        ))}
        {biggerThanMax && (
          <li className="media-gallery__item">
            <button
              onClick={() => setIsModalOpen(true)}
              className="media-gallery__thumb"
              aria-label={`Ver mas ${excedingAmount} imagenes de ${productTitle}`}
            >
              +{excedingAmount}
            </button>
          </li>
        )}
      </ul>
      <div className="media-gallery__image">
        {medias.map((mediaUrl, index) => (
          <Image
            key={mediaUrl}
            src={getImageUrlByMediaId(mediaUrl, "large")}
            alt={productTitle}
            width={550}
            height={600}
            unoptimized
            priority={index == 0}
            fetchPriority={index == 0 ? "high" : "auto"}
            hidden={index != currentMediaIndex}
          />
        ))}
      </div>
      {isModalOpen && (
        <MediaGalleryModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          currentMediaIndex={currentMediaIndex}
          medias={medias}
          setCurrentMediaIndex={setCurrentMediaIndex}
          currentMediaUrl={currentMediaUrl}
        />
      )}
    </div>
  );
}
