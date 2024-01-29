import { Drawer } from "antd";
import { useState } from "react";
import phone from "../../assets/phone.webp";
import whatsapp from "../../assets/whatsapp.webp";
import { FaRegWindowClose } from "react-icons/fa";

const RightWidget = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
        <div className="info">
          <p>Chennai</p>
          <p> 99629 44444</p>
          <p>Coimbatore</p>
          <p> 99629 44444</p>
          <p>Bengaluru</p>
          <p> 99629 44444</p>
          <p>Hyderabad</p>
          <p> 99629 44444</p>
        </div>
        <div onClick={onClose} className="close">
          <FaRegWindowClose />
        </div>
      </Drawer>
    </>
  );
};

export default RightWidget;
