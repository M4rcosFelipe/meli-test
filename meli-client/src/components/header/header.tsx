import "./header.scss";
import "@/styles/common.scss";
import SearchBox from "../search-box/search-box";
import Logo from "./logo/logo";
import Link from "next/link";
import FirstTimeMessage from "../first-time-message/first-time-message";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content main-container">
        <Link
          href="/"
          aria-label="Mercado Libre Argentina - Donde comprar y vender de todo"
        >
          <Logo />
        </Link>
        <Suspense>
          <SearchBox />
        </Suspense>

        <div className="header__first-message">
          <FirstTimeMessage />
        </div>
      </div>
    </header>
  );
}
