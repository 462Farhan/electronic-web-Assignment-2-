function Victus() {
  const pageStyle = {
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
    padding: "40px",
  };

  const containerStyle = {
    display: "flex",
    gap: "40px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0px 3px 12px rgba(0,0,0,0.1)",
    flexWrap: "wrap",
  };

  const imageSection = {
    flex: "1",
    minWidth: "300px",
    textAlign: "center",
  };

  const detailsSection = {
    flex: "1",
    minWidth: "300px",
  };

  const imageStyle = {
    fontSize: "180px",
  };

  const titleStyle = {
    fontSize: "36px",
    marginBottom: "10px",
    color:"black"
  };

  const priceStyle = {
    color: "#007bff",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "14px 30px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    marginRight: "15px",
  };

  const buyButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745",
  };

  const specBox = {
    backgroundColor: "#fff",
    marginTop: "40px",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0px 3px 12px rgba(0,0,0,0.1)",
  };
  const heading=
  {
color:"black",
fontWeight:"Bold"
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={imageSection}>
          <div style={imageStyle}><img src=" data:image/webp;base64,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" alt=" laptop img " width="170px" height="170px"/></div>
            <br/>  
                   
          <h3 color="rgb(43, 42, 42)">HP Victus Gaming Laptop</h3>
        </div>

        <div style={detailsSection}>
          <h1 style={titleStyle}>
            HP Victus 15 Gaming Laptop
          </h1>

          <p style={priceStyle}>
            ₹74,999
          </p>

          <p>
            Experience powerful gaming and multitasking
            with the latest HP Victus series laptop.
            Built for gamers, students and creators.
          </p>

          <ul>
            <li>Intel Core i5 13th Gen</li>
            <li>16GB DDR4 RAM</li>
            <li>512GB SSD Storage</li>
            <li>NVIDIA RTX 4050 Graphics</li>
            <li>15.6" Full HD Display</li>
            <li>144Hz Refresh Rate</li>
          </ul>

          <button style={buttonStyle}>
            Add To Cart
          </button>

          <button style={buyButtonStyle}>
            Buy Now
          </button>
        </div>
      </div>

      <div style={specBox}>
        <h2 style={heading}>Technical Specifications</h2>

        <hr />

        <p>
          <strong>Processor:</strong>
          Intel Core i5-13420H
        </p>

        <p>
          <strong>Graphics:</strong>
          NVIDIA GeForce RTX 4050
        </p>

        <p>
          <strong>RAM:</strong>
          16GB DDR4
        </p>

        <p>
          <strong>Storage:</strong>
          512GB SSD
        </p>

        <p>
          <strong>Display:</strong>
          15.6" Full HD IPS
        </p>

        <p>
          <strong>Refresh Rate:</strong>
          144Hz
        </p>

        <p>
          <strong>Operating System:</strong>
          Windows 11
        </p>
      </div>

      <div
        style={{
          marginTop: "40px",
          backgroundColor: "#222",
          color: "white",
          padding: "30px",
          borderRadius: "15px",
        }}
      >
        <h2>Why Choose HP Victus?</h2>

        <ul>
          <li>Excellent Gaming Performance</li>
          <li>Fast SSD Boot Times</li>
          <li>High Refresh Rate Display</li>
          <li>Premium Cooling System</li>
          <li>Perfect for Gaming & Development</li>
        </ul>
      </div>
    </div>
  );
}

export default Victus;