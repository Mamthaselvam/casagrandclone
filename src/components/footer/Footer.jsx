import "./footer.scss";
import fb from "../../images/fb.webp";
import twitter from "../../images/twitter.webp";
import insta from "../../images/insta.webp";
import pinterest from "../../images/pinterest.webp";
import linkedin from "../../images/linkedin.webp";
import youtube from "../../images/youtube.webp";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RightWidget from "./RightWidget";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <Container>
          <Col xl={10}>
            <div>
              <Link to="/" className="link">
                About Us
              </Link>
              <Link to="/" className="link">
                Channel Partners
              </Link>
              <Link to="/" className="link">
                Media
              </Link>
              <Link to="/" className="link">
                Blog
              </Link>
              <Link to="/" className="link">
                Testimonials
              </Link>
              <Link to="/" className="link">
                Refferals
              </Link>
              <Link to="/" className="link">
                NRI
              </Link>
              <Link to="/" className="link">
                Helpful Tools
              </Link>
            </div>

            <div className="mt-2">
              <a
                target="_blank"
                href="https://www.facebook.com"
                rel="noreferrer"
              >
                <img src={fb} className="Image" />
              </a>

              <a target="_blank" href="https://twitter.com/" rel="noreferrer">
                <img src={twitter} className="Image" />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/"
                rel="noreferrer"
              >
                <img src={insta} className="Image" />
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/"
                rel="noreferrer"
              >
                <img src={linkedin} className="Image" />
              </a>

              <a
                target="_blank"
                href="https://www.youtube.com/"
                rel="noreferrer"
              >
                <img src={youtube} className="Image" />
              </a>

              <a
                target="_blank"
                href="https://in.pinterest.com/"
                rel="noreferrer"
              >
                <img src={pinterest} className="Image" />
              </a>
            </div>
          </Col>
        </Container>
      </footer>

      <RightWidget />
    </>
  );
};

export default Footer;
