import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-mark">P</span>
          <span className="navbar__brand-text">PANEL</span>
        </Link>
        <span className="navbar__meta">Anime &amp; character library</span>
      </div>
    </header>
  );
}
