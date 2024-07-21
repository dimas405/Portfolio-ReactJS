import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a href="https://www.linkedin.com/in/dimas-a-pradana-340642303/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="linkedin"/>
        </a>
        <a href="https://github.com/dimas405" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="github"/>
        </a>
      </div>
      <ul className="list">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skill</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <p className="copyright">
        &copy; 2023. Dimas Andik Pradana. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
