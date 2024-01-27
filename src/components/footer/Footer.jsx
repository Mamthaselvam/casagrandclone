import "./footer.scss";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <Col xl={10}>
          <div>
            <Link to="/" className="mx-3">
              About Us
            </Link>
            <Link to="/" className="mx-3">
              Channel Partners
            </Link>
            <Link to="/" className="mx-3">
              Media
            </Link>
            <Link to="/" className="mx-3">
              Blog
            </Link>
            <Link to="/" className="mx-3">
              Testimonials
            </Link>
            <Link to="/" className="mx-3">
              Refferals
            </Link>
            <Link to="/" className="mx-3">
              NRI
            </Link>
            <Link to="/" className="mx-3">
              Helpful Tools
            </Link>
          </div>

          <div>
            <a href="/" className="mx-3">
              <FaFacebook />
            </a>

            <a href="/" className="mx-3">
              <FaFacebook />
            </a>

            <a href="/" className="mx-3">
              <FaFacebook />
            </a>
          </div>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
