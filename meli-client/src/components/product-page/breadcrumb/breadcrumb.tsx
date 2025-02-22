import "./breadcrumb.scss";

interface Props {
  previousUrl: string | null;
  items: string[];
}
export default function Breadcrumb({ previousUrl, items }: Props) {
  return (
    <ul className="breadcrumb">
      <li className="breadcrumb__item breadcrumb__item--back-link">
        <a href={previousUrl ?? "/"}>Volver al listado</a>
      </li>
      {items.map((item, index) => (
        <li className="breadcrumb__item" key={item}>
          <span>{item}</span>

          {index != items.length - 1 && (
            <div className="breadcrumb__separator">{">"}</div>
          )}
        </li>
      ))}
    </ul>
  );
}
