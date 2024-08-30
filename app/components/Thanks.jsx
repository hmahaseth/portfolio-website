import React from "react";

const Thanks = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #333, #000)", 
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    background: "#222", 
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
    padding: "30px",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
  };

  const headingStyle = {
    color: "#fff", 
    fontSize: "2rem",
    marginBottom: "15px",
  };

  const messageStyle = {
    color: "#ccc", 
    fontSize: "1.2rem",
    marginBottom: "20px",
  };

  const linkStyle = {
    color: "#00bfff", 
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Thank You!</h1>
        <p style={messageStyle}>
          Your submission has been received. We appreciate your feedback and
          will get back to you soon!
        </p>
        <a
          href="/"
          style={linkStyle}
          onMouseEnter={(e) =>
            (e.target.style.textDecoration = linkHoverStyle.textDecoration)
          }
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
        >
          Go back to the homepage
        </a>
      </div>
    </div>
  );
};

export default Thanks;
