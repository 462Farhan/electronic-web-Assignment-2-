function Contact() {
  const pageStyle = {
    padding: "40px",
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
  
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "auto",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  };
  function action()
  {
    console.log("message send")
    alert("message send");
  }

  return (
    <div style={pageStyle}>
      <h1 style={{ textAlign: "center",  color:"black"  }}>
        Contact Us
      </h1>

      <div style={formStyle}>
        <input
          type="text"
          placeholder="Your Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={inputStyle}
        />

        <textarea
          placeholder="Your Message"
          style={{
            ...inputStyle,
            height: "120px",
          }}
        />

        <button
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={action}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;