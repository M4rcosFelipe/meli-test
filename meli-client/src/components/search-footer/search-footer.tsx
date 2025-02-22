import "./search-footer.scss";

interface Props {
  children: React.ReactNode;
}
export default function SearchFooter({ children }: Props) {
  return <div className="search-footer">{children}</div>;
}
