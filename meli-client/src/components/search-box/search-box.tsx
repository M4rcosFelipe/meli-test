"use client";
import "./search-box.scss";

import { useSearchParams } from "next/navigation";

export default function SearchBox() {
  const searchParams = useSearchParams();

  return (
    <form className="search-box" action="/items">
      <input
        className="search-box__input"
        type="text"
        name="search"
        placeholder="Buscar productos, marcas y más..."
        maxLength={120}
        required
        defaultValue={searchParams.get("search") ?? ""}
      />

      <button className="search-box__button" aria-label="buscar">
        <img className="" src="/img/ic_Search@2x.png" alt="icone de lupa" />
      </button>
    </form>
  );
}
