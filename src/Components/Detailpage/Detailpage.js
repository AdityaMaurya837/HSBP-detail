import React from "react";
import "./detail.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const Detailpage = () => {
  return (
    <div>
      <Row className="menu-content">
        <Col span={8} className="menu-col">
          <Link
            className="nav-link"
            aria-current="page"
            to="/beauty-scervices"
          >
            Beauty Scervices
          </Link>
        </Col>
        <Col span={8} className="menu-col">
          <Link
            className="nav-link"
            aria-current="page"
            to="/beautyp-package"
          >
            Beauty Package
          </Link>
        </Col>
        <Col span={8} className="menu-col">
          <Link className="nav-link" aria-current="page" to="/">
            Bridal Package
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Detailpage;
