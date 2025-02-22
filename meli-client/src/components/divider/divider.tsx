import "./divider.scss";

interface Props {
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
}

export default function Divider({
  mt = "0px",
  mr = "0px",
  mb = "0px",
  ml = "0px",
}: Props) {
  return (
    <span
      className="divider"
      style={{
        marginTop: mt,
        marginRight: mr,
        marginBottom: mb,
        marginLeft: ml,
      }}
    />
  );
}
