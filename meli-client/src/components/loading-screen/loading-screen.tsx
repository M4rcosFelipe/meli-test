import Spinner from "../spinner/spinner";
import "./loading-screen.scss";

export default function LoadingPage() {
  return (
    <div className="loading-screen">
      <Spinner size={60} />
    </div>
  );
}
