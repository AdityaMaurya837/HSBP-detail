import { React, useState } from "react";
import { Space, Button, Drawer, Row, Col } from "antd";
import logo from "../img/Group 37.png";
import menu from "../img/Group 7.png";
import playStore from "../img/Layer 58.png";
import cart from "../img/Icon zocial-cart.png";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={menu} onClick={showDrawer} alt="" />
        <img src={logo} alt="" />
        <Drawer
          title="Drawer with extra actions"
          placement={"left"}
          width={500}
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button className="drawer-btn" type="primary" onClick={onClose}>
                OK
              </Button>
            </Space>
          }
        >
          <Row className="included-product">
            <Col xs={24} sm={24} className="included-product-content">
              <h4>What's Included ?</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </Col>
          </Row>
        </Drawer>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">DOWNLOAD APP</a>
        </li>
        <li>
          <a href="/">
            <img src={playStore} alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={cart} alt="" />
          </a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
