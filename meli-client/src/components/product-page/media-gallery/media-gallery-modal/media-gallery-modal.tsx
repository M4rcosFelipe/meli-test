"use client";
import { getImageUrlByMediaId } from "@/utils/images";

import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Props {
  setIsModalOpen: (open: boolean) => void;
  currentMediaIndex: number;
  medias: string[];
  setCurrentMediaIndex: (mediaIndex: number) => void;
  isModalOpen: boolean;
  currentMediaUrl: string;
}
export default function MediaGalleryModal({
  setIsModalOpen,
  currentMediaIndex,
  medias,
  setCurrentMediaIndex,
  isModalOpen,
  currentMediaUrl,
}: Props) {
  const isOnLastMedia = currentMediaIndex == medias.length - 1;
  const isOnFirstMedia = currentMediaIndex == 0;

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
    <dialog className="media-gallery__modal" aria-hidden={!isModalOpen}>
      <div className="media-gallery__modal-content">
        <button
          className="media-gallery__modal-close-button"
          onClick={() => setIsModalOpen(false)}
          aria-label="Close"
        >
          <X size={20} color="#fff" />
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
          <img src={getImageUrlByMediaId(currentMediaUrl, "large")} />
        </div>
        {!isOnLastMedia && (
          <button className="media-gallery__modal-button" onClick={nextImage}>
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </dialog>
  );
}
