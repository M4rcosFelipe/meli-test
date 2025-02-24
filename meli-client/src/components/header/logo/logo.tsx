import Image from "next/image";
import "./logo.scss";

export default function Logo() {
  return (
    <>
      <Image
        className="logo logo--desktop"
        src="/img/logo_large_25years@2x.png"
        alt="Logo"
        width={148}
        height={38}
        unoptimized
      />
      <Image
        className="logo logo--mobile"
        src="/img/logo__small@2x.png"
        alt="Logo"
        width={44}
        height={32}
        unoptimized
      />
    </>
  );
}
