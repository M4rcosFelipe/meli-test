import "./search-empty-results.scss";

export default function SearchEmptyResults() {
  return (
    <div className="search-empty-results">
      <div className="search-empty-results__content">
        <h3 className="search-empty-results__title">
          No hay anuncios que coincidan con tu búsqueda para esta página o
          término
        </h3>

        <ul className="search-empty-results__solutions">
          <li className="search-empty-results__solution-item">
            Comprueba la ortografía de la palabra.
          </li>
          <li className="search-empty-results__solution-item">
            Utilice palabras más genéricas o menos palabras.
          </li>
        </ul>
      </div>
    </div>
  );
}
