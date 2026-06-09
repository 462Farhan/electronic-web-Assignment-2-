import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
    padding: "15px 30px",
  };

  const logoStyle = {
    color: "white",
    margin: 0,
  };

  const navLinksStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <nav style={navbarStyle}>
      <h2 style={logoStyle}>MyWebsite</h2>

      <div style={navLinksStyle}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>

        <Link to="/products" style={linkStyle}>
      Products
        </Link>

        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
           <Link to="/congrats" style={linkStyle}>
          Deals
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;