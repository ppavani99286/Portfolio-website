import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-left">
          <h2>Pavani.</h2>

          <p>
            Frontend Developer passionate about building
            modern, responsive, and user-friendly web
            applications.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <h3>Connect</h3>

          <div className="social-icons">

            <a
              href="https://github.com/ppavani99286"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/pirangi-pavani-5662ba386/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Pavani. All Rights Reserved.
        </p>

        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;