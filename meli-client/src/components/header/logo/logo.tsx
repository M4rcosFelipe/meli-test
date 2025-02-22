import "./logo.scss";

export default function Logo() {
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
