import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import logoImg from "../../assets/logoImg.png";
import { top } from "../../data/data";
import "./topbar.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (url) => {
    navigate(url);
    window.scrollTo(0, 0);
    setShowOffcanvas(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);

    setShowOffcanvas(false);
  };

  return (
    <>
      <>
        <header id="header">
          <Container>
            <Navbar expand="xl" className={`${scrolled ? "scrolled" : ""}`}>
              <Container>
                <Link to="/" onClick={handleLogoClick}>
                  <img src={logoImg} className="logo" alt="logo" />
                </Link>

                <Navbar.Toggle onClick={() => setShowOffcanvas(!showOffcanvas)}>
                  <FaBars
                    className="barIcon"
                    style={{ color: "#000", fontSize: "2rem" }}
                  />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    {top.map((menu) => (
                      <NavLink
                        to={menu.url}
                        className="menuLink"
                        key={menu.id}
                        onClick={() => handleLinkClick(menu.url)}
                      >
                        {menu.text}
                      </NavLink>
                    ))}

                    <NavLink
                      to="/contact"
                      className="px-4 py-1"
                      onClick={() => handleLinkClick("/contact")}
                    >
                      <button className="btn btn-lg contactBtn">ENQUIRE</button>
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            {/* Offcanvas menu */}
            <Offcanvas
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <Link to="/" onClick={handleLogoClick}>
                    <img src={logoImg} className="logo" alt="logo" />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* Your offcanvas menu content goes here */}
                <Nav className="flex-column">
                  {top.map((menu) => (
                    <NavLink
                      to={menu.url}
                      className="menuLink"
                      key={menu.id}
                      onClick={() => handleLinkClick(menu.url)}
                    >
                      {menu.text}
                    </NavLink>
                  ))}

                  <NavLink to="/contact" className="py-1">
                    <button className="btn btn-lg contactBtn">ENQUIRE</button>
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </header>
      </>
    </>
  );
};

export default Header;
