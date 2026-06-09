import { Link } from "react-router-dom";
function Home() {
  const heroStyle = {
    background: "linear-gradient(to right, #141e30, #243b55)",
    color: "white",
    padding: "80px 40px",
    textAlign: "center",
  };

  const sectionStyle = {
    padding: "50px 30px",
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "30px",
  };

  const cardStyle = {
    width: "250px",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const footerStyle = {
    backgroundColor: "#222",
    color: "white",
    textAlign: "center",
    padding: "20px",
    marginTop: "50px",
  };
  

  return (
    <>
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Welcome to TechHub
        </h1>

        <p style={{ fontSize: "20px" }}>
          Discover the latest laptops, smartphones and gadgets
        </p>

        <Link to="/products">
        <button 
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          
        >
          Shop Now
        </button>
        </Link>
      </section>

      {/* Categories */}
      <section style={sectionStyle}>
        <h2 style={{ textAlign: "center" }}>Shop By Category</h2>

        <div style={cardContainer}>
          <div style={cardStyle}>
            <h3>💻 Laptops</h3>
            <p>Gaming, Business & Student laptops</p>
          </div>

          <div style={cardStyle}>
            <h3>📱 Smartphones</h3>
            <p>Latest Android & iPhone devices</p>
          </div>

          <div style={cardStyle}>
            <h3>🎧 Headphones</h3>
            <p>Wireless and noise-cancelling audio</p>
          </div>

          <div style={cardStyle}>
            <h3>⌚ Smart Watches</h3>
            <p>Track fitness and stay connected</p>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section style={sectionStyle}>
        <h2 style={{ textAlign: "center" }}>Popular Products</h2>

        <div style={cardContainer}>
          <div style={cardStyle}>
            <h3>MacBook Pro</h3>
            <p>Powerful laptop for professionals</p>
          </div>

          <div style={cardStyle}>
            <h3>iPhone 16</h3>
            <p>Flagship smartphone experience</p>
          </div>

          <div style={cardStyle}>
            <h3>Galaxy Watch</h3>
            <p>Advanced health tracking features</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={sectionStyle}>
        <h2 style={{ textAlign: "center" }}>Why Choose TechHub?</h2>

        <div style={cardContainer}>
          <div style={cardStyle}>
            <h3>🚚 Fast Delivery</h3>
            <p>Quick and secure shipping</p>
          </div>

          <div style={cardStyle}>
            <h3>💰 Best Prices</h3>
            <p>Competitive prices on all products</p>
          </div>

          <div style={cardStyle}>
            <h3>🛡 Warranty</h3>
            <p>Trusted warranty and support</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>© 2026 TechHub. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;