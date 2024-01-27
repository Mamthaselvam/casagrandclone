import "./footer.scss";
import fb from '../../images/fb.webp'
import twitter from '../../images/twitter.webp'
import insta from '../../images/insta.webp'
import pinterest from '../../images/pinterest.webp'
import linkedin from '../../images/linkedin.webp'
import youtube from '../../images/youtube.webp'
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";



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
            <a href="https://www.facebook.com" >
            <img src={fb} />
            </a>

            <a href="https://twitter.com/" >
            <img src={twitter}  />
            </a>

            <a href="https://www.instagram.com/" >
            <img src={insta} />
            </a>

            <a href="https://www.linkedin.com/" >
            <img src={linkedin} />
            </a>

            <a href="https://www.youtube.com/" >
            <img src={youtube} />
            </a>

            <a href="https://in.pinterest.com/" >
            <img src={pinterest} />
            </a>
          </div>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
