import React from "react";

const footerStyle = {
  background: "black",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  marginTop: "auto", // Ensures the footer sticks to the bottom
};

const linkStyle = {
  color: "white",
  margin: "0 10px",
  textDecoration: "none",
  fontSize: "24px", // Adjust the size of the icons
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Himanshu Mahaseth. All rights reserved.</p>
      <div>
        <a
          href="https://github.com/hmahaseth"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://twitter.com/yourusername"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/royal-empire/"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/himanshumahaseth_/"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
