import Pagination from "../pagination/pagination";
import "./search-footer.scss";

interface Props {}
export default function SearchFooter({}: Props) {
  return (
    <div className="search-footer">
      <Pagination />
    </div>
  );
}
