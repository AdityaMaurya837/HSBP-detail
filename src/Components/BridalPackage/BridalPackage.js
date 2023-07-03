import React, { useState } from "react";
import "./bridal.css";
import { Row, Col, Table, Card } from "antd";
import bridal from "../img/Mask Group 81.png";
import redTag from "../img/shutterstock.png";
import imgG from "../img/Mask Group 98.png";
import imgG2 from "../img/Mask Group 99.png";
import imgG3 from "../img/Mask Group 100.png";
import imgG4 from "../img/Mask Group 101.png";
import imgG5 from "../img/Mask Group 102.png";
import imgE from "../img/Image76.png";
import imgE2 from "../img/Image79.png";
import imgE3 from "../img/Image82.png";

const BridalPackage = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (record) => {
    setSelectedRow(record);
  };

  const cardData = [
    {
      id: "1",
      title: "Deepika Singh",
      post: "Beautician ",
      exp: "10+ yes exp",
      image: imgE,
    },
    {
      id: "2",
      title: "Shashi Sexena",
      post: "Makeup Artist & Hairstylist",
      exp: "10+ yes exp",
      image: imgE2,
    },
    {
      id: "3",
      title: "Pooja Singhal",
      post: "Beautician",
      exp: "10+ yes exp",
      image: imgE3,
    },
    {
      id: "4",
      title: "Deepika Singh",
      post: "Beautician",
      exp: "10+ yes exp",
      image: imgE,
    },
  ];

  const dataSource = [
    {
      key: "1",
      question:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, vero. 1 ",
      answer:
        "Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales consectetur Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.",
    },
    {
      key: "2",
      question:
        "Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales consectetur 2",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock a Latin professor at Hampden-Sydney College in Virginia, looked  up one of the more obscure Latin words classical",
    },
    {
      key: "3",
      question:
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, Omnis justo vero. 3",
      answer:
        "literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem.",
    },
    {
      key: "4",
      question:
        "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, cvero. 4",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassin",
    },
  ];

  const columns = [
    {
      title: "Question",
      dataIndex: "question",
      key: "question",
    },
  ];
  const Imgdata = [
    {
      img: imgG,
    },
    {
      img: imgG2,
    },
    {
      img: imgG3,
    },
    {
      img: imgG4,
    },
    {
      img: imgG5,
    },
  ];
  return (
    <div>
      <Row className="reception">
        <Col xs={24} sm={8} className="bridal-img">
          <img src={bridal} alt="" />
        </Col>
        <Col xs={24} sm={16}>
          <div className="reception-main-heading">
            <h2>Reception</h2>
            <img src={redTag} className="redtag" alt="" />
          </div>
          <hr />
          <div className="reception-second-content">
            <h3>Services & Pricing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.magnam{" "}
              <span>Read More</span>
            </p>
          </div>
          <div className="product">
            <div>
              <p>- Oxy bleach</p>
              <p>- 03 Facial</p>
              <p>- Chocolate wax</p>
              <p>- Anti-Tan Manicure</p>
              <p>- Bridal Mahendi</p>
            </div>
            <div>
              <p>- Anti-Tan Pedicure</p>
              <p>- Krylon Makeup</p>
              <p>- Bridal Mahendi</p>
              <p>- Auravedic Kit</p>
              <p>- Oxy bleach</p>
            </div>
          </div>
          <div className="price">
            <div className="rupee">
              <p>₹ 3799</p>
              <p>₹ 7600</p>
            </div>
            <div>
              <button>Book Now</button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="included-product">
        <Col xs={24} sm={11} className="included-product-content">
          <h4>What's Included ?</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Col>
        <Col xs={24} sm={11} className="included-product-content">
          <h4>Products</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Col>
      </Row>
      <Row className="included-product">
        <Col xs={24} sm={24} className="included-product-content">
          <h4>Things to Know</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            quidem reprehenderit ipsum quod fuga, incidunt delectus nesciunt ex
            molestias non?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            quidem reprehenderit ipsum quod fuga, incidunt delectus nesciunt ex
            molestias non?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            quidem reprehenderit ipsum quod fuga, incidunt delectus nesciunt ex
            molestias non?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            quidem reprehenderit ipsum quod fuga, incidunt delectus nesciunt ex
            molestias non?
          </p>
        </Col>
      </Row>
      <Row className="image-gallery">
        <Col span={24 / Imgdata.length} className="image-gallery-img">
          <h2>Image Gallery</h2>
          {Imgdata.map((item, index) => (
            <img src={item.img} alt="img" style={{ width: "180px" }} />
          ))}
        </Col>
      </Row>
      <Row className="faq">
        <Col xs={24} sm={12}>
          <h2>Frequently Asked Questions</h2>
          <p>If you have any further question you can contact us</p>
          <Table
            className="faq-table"
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            onRow={(record) => ({
              onClick: () => handleRowClick(record),
            })}
          />
        </Col>
        <Col xs={24} sm={8} style={{ marginLeft: "20px" }}>
          {selectedRow && (
            <Card className="faq-table-card">
              <h3>Question : {selectedRow.question}</h3>
              <p><b>Answer : </b> {selectedRow.answer}</p>
            </Card>
          )}
        </Col>
      </Row>

      <div className="location-shop">
        <div className="heading">
          <h1>Our Beauticians</h1>
        </div>
        <div className="location">
          {cardData.map((card, index) => (
            <div
              className="location-card"
              key={index}
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="location-contant">
                <div className="location-contant-heading">
                  <h4>{card.title}</h4>
                  <p>
                    {card.post}
                    <br /> {card.exp}
                  </p>
                </div>
              </div>
              <a className="readmore">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BridalPackage;
