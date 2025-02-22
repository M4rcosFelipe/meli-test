import "./logo.scss";

interface Props {}
export default function Logo({}: Props) {
  return (
    <>
      <img
        className="logo logo--desktop"
        src="/img/logo_large_25years@2x.png"
        alt="Logo"
      />
      <img
        className="logo logo--mobile"
        src="/img/logo__small@2x.png"
        alt="Logo"
      />
    </>
  );
}
