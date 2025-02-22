"use client";

import "./pagination.scss";
import { useSearch } from "@/hooks/useSearch";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
interface Props {}

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

export default function Pagination({}: Props) {
  let { currentPage, goToPage, goToNextPage, goToPreviousPage, totalPages } =
    useSearch();
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
    <nav className="pagination">
      <ul className="pagination__list">
        {currentPage > 1 && (
          <li className="pagination__button pagination__button--previous">
            <button className="pagination__link" onClick={goToPreviousPage}>
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
              onClick={(e) => {
                e.preventDefault;
                goToPage(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li className="pagination__button pagination__button--previous">
          {currentPage < totalPages && (
            <button className="pagination__link" onClick={goToNextPage}>
              Siguiente {">"}
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
