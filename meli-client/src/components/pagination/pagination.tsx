"use client";

import "./pagination.scss";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
interface Props {
  currentPage: number;
  goToPage: (pageNumber: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  totalPages: number;
}

function getNewPagesSet<T>(amount: number, item: T, array: T[]) {
  const indexOfCurrentPage = array.indexOf(item);
  const totalItemsBeforeCurrent = Math.floor(amount / 2);
  const totalItemsAfterCurrent = Math.floor(amount / 2);

  const beforeItems = array.slice(
    indexOfCurrentPage - totalItemsBeforeCurrent,
    indexOfCurrentPage
  );

  const afterItems = array.slice(
    indexOfCurrentPage,
    indexOfCurrentPage + totalItemsAfterCurrent
  );
  return [...beforeItems, ...afterItems];
}

export default function Pagination({
  currentPage,
  goToPage,
  goToNextPage,
  goToPreviousPage,
  totalPages,
}: Props) {
  const matchesMediaQuery = useMediaQuery("(max-width: 768px)");
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(matchesMediaQuery);
  }, [isMobile]);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const displayPagesAmount = isMobile ? 3 : 10;

  const displayPages =
    pages.length > displayPagesAmount
      ? getNewPagesSet<number>(displayPagesAmount, currentPage, pages)
      : pages;

  return (
    <nav className="pagination" aria-label="Paginación">
      <ul className="pagination__list">
        {currentPage > 1 && (
          <li className="pagination__button pagination__button--previous">
            <button
              className="pagination__link"
              onClick={goToPreviousPage}
              data-testid="go-to-previous-page-button"
            >
              {"<"} Anterior
            </button>
          </li>
        )}

        {displayPages.map((pageNumber) => (
          <li key={pageNumber} className={"pagination__button"}>
            <button
              className={`pagination__link ${
                currentPage == pageNumber ? "pagination__link--current" : ""
              }`}
              onClick={() => {
                goToPage(pageNumber);
              }}
              aria-label={`Ir a la página ${pageNumber}`}
              data-testid="page-number-button"
              data-page-number={pageNumber}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li className="pagination__button pagination__button--previous">
          {currentPage < totalPages && (
            <button
              className="pagination__link"
              onClick={goToNextPage}
              data-testid="go-to-next-page-button"
            >
              Siguiente {">"}
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
