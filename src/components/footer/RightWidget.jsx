import { Drawer } from "antd";
import { useState } from "react";

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
        <div onClick={showDrawer}>icno1</div>
        <div>icno2</div>
      </div>

      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        <p>Some contents...</p>
        <div onClick={onClose}>close</div>
      </Drawer>
    </>
  );
};

export default RightWidget;
