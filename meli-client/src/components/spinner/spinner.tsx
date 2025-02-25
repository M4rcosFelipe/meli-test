import "./spinner.scss";
import { LoaderCircle } from "lucide-react";

interface Props {
  size: number;
}
export default function Spinner({ size }: Props) {
  return <LoaderCircle size={size} className="spinner" />;
}
