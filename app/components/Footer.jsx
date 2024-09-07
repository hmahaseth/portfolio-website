import React from "react";

const footerStyle = {
  background: "black",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  marginTop: "auto",
};

const linkStyle = {
  color: "white",
  margin: "0 10px",
  textDecoration: "none",
  fontSize: "24px",
};

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      style={footerStyle}
    >
      <p>&copy; 2024 Himanshu Mahaseth. All rights reserved.</p>
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
          href="https://x.com/thegr8_himanshu"
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
        <a
          href="https://www.threads.net/@himanshumahaseth_"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Threads"
        >
          <i className="fab fa-threads"></i>{" "}
        </a>
        <a
          href="https://www.facebook.com/himanshumahaseth8"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
