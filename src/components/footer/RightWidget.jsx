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
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
        className="drawer"
      >
<<<<<<< HEAD
        <p>Chennai</p>
=======
       
        <div className="info"><p>Chennai</p>
>>>>>>> f51b406966d6b358bede0385f8457aee6503b1f7
        <p> 99629 44444</p>
        <p>Coimbatore</p>
        <p> 99629 44444</p>
        <p>Bengaluru</p>
        <p> 99629 44444</p>
        <p>Hyderabad</p>
<<<<<<< HEAD
        <p> 99629 44444</p>
        <div onClick={onClose} className="close">
          <FaRegWindowClose />
        </div>
=======
        <p> 99629 44444</p></div>
        <div onClick={onClose} className="close"><FaRegWindowClose/></div>
>>>>>>> f51b406966d6b358bede0385f8457aee6503b1f7
      </Drawer>
    </>
  );
};

export default RightWidget;
