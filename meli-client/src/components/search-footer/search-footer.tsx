import "./search-footer.scss";

interface Props {
  children: React.ReactNode;
}
export default function SearchFooter({ children }: Props) {
  return <footer className="search-footer">{children}</footer>;
}
