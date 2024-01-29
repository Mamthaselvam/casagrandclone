import { Drawer } from "antd";
import { useState, useEffect } from "react";
import phone from "../../assets/phone.webp";
import whatsapp from "../../assets/whatsapp.webp";
import { FaRegWindowClose } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const RightWidget = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
      offset: 200,
    });
  }, []);

  return (
    <> 
      <div className="whatsAppIcon">
        <div onClick={showDrawer} className="phoneIcon">
          <img src={phone} className="icon1" />
        </div>
        <a href="https://whatsapp.com/">
          <img src={whatsapp} className="icon2" />
        </a>
        <div></div>
      </div>

      <Drawer
        title="CALL US"
        placement="end"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
        className="drawer"
      >
        <div className="info" data-aos="fade-left">
          <p className="fw-bold mb-0">Chennai</p>
          <p> 99629 44444</p>
          <p className="fw-bold mb-0">Coimbatore</p>
          <p className="mb-0"> 99629 44444</p>
          <p className="mb-0">Bengaluru</p>
          <p> 99629 44444</p>
          <p className="fw-bold mb-0">Hyderabad</p>
          <p className="mb-0"> 99629 44444</p>
        </div>
        <div onClick={onClose} className="close">
          <FaRegWindowClose />
        </div>
      </Drawer>
    </>
  );
};

export default RightWidget;
