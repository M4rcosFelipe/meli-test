import Link from "next/link";
import "./not-found.scss";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h2 className="not-found__title">Página no encontrada</h2>
        <Link href="/" className="not-found__link">
          Volver a la página principal {">"}
        </Link>
      </div>
    </div>
  );
}
