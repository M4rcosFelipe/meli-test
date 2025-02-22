import "./description.scss";

interface Props {
  descriptionText: string;
}
export default function Description({ descriptionText }: Props) {
  return (
    <div className="description">
      <h2 className="description__title">Descripción</h2>
      <p className="description__content">
        {descriptionText ??
          "El vendedor no incluyó una descripción del producto"}
      </p>
    </div>
  );
}
