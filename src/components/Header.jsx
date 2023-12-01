import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <a className="header-left">Online Board</a>
      <Link to="/thread/new">Create A New Thread</Link>
    </header>
  );
};

export default Header;
