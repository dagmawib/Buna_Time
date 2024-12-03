import React from "react";
import "../css/styles.css"; // Import your CSS styles

const TypingTest = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="./logo.png" alt="Logo" height="100" />
        </div>
        <h1 className="brand-title">Buna Time</h1>
        <div className="navbar-content">
          <a href="/">
            <img src="./user.png" alt="user" height="40" />
          </a>
        </div>
      </nav>
      <div className="toolbar">
        <div className="toolbar-item">15</div>
        <div className="separator"></div>
        <div className="toolbar-item">30</div>
        <div className="separator"></div>
        <div className="toolbar-item">45</div>
        <div className="separator"></div>
        <div className="toolbar-item">60</div>
        <div className="selected-indicator"></div>
      </div>
      <div className="typing-text">
        {/* You can replace this with dynamic content from state or props */}
        {/* {paragraph} */}
      </div>
      <form id="typingForm" style={{ display: "none" }}>
        <input type="hidden" id="typingSpeed" name="typingSpeed" value="" />
        <input type="hidden" id="accuracy" name="accuracy" value="" />
      </form>
      <footer className="footer">
        <a className="footer-left-side" href="https://github.com/MichaelBirhanuGmichael/Buna_Time">
          <i className="fab fa-github"></i>
          GitHub
        </a>
        <div className="footer-right-side">
          Made with 💛 at the lab.
        </div>
      </footer>
    </div>
  );
};

export default TypingTest;
