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
              <Link to="/" className="foot">
                About Us
              </Link>
              <Link to="/" className="foot">
                Channel Partners
              </Link>
              <Link to="/" className="foot">
                Media
              </Link>
              <Link to="/" className="foot">
                Blog
              </Link>
              <Link to="/" className="foot">
                Testimonials
              </Link>
              <Link to="/" className="foot">
                Refferals
              </Link>
              <Link to="/" className="foot">
                NRI
              </Link>
              <Link to="/" className="foot">
                Helpful Tools
              </Link>
            </div>

            <div>
              <a href="https://www.facebook.com">
                <img src={fb} className="Image" />
              </a>

              <a href="https://twitter.com/">
                <img src={twitter} className="Image" />
              </a>

              <a href="https://www.instagram.com/">
                <img src={insta} className="Image"/>
              </a>

              <a href="https://www.linkedin.com/">
                <img src={linkedin} className="Image" />
              </a>

              <a href="https://www.youtube.com/">
                <img src={youtube} className="Image" />
              </a>

              <a href="https://in.pinterest.com/">
                <img src={pinterest}className="Image" />
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
