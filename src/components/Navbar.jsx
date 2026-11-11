import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand"><span className="brand-mark">rk.</span><span>rentalk<span className="brand-light">an</span></span></Link>
        <nav className="nav-menu">
          <NavLink to="/" end>Beranda</NavLink>
          <NavLink to="/product">Katalog</NavLink>
          <NavLink to="/my-rentals">Pesanan saya</NavLink>
        </nav>
        <Link to="/product" className="nav-button">Cari perlengkapan <span>↗</span></Link>
      </div>
    </header>
  );
}
export default Navbar;
