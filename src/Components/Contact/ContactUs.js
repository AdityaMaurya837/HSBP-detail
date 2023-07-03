import React from "react";
import "./contact.css";
import logo from "../img/Group 37.png";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-content-text">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur, beataeLorem ipsum dolor sit, amet consectetur
              Aspernatur.
            </p>
          </div>
          <div className="contact-content-link1">
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
              <li>
                <a href="">Largest Platform</a>
              </li>
              <li>
                <a href="">Beauty Services</a>
              </li>
              <li>
                <a href="">Book Appointment</a>
              </li>
              <li>
                <a href="">Beauty Package</a>
              </li>
              <li>
                <a href="">Beauty Package</a>
              </li>
              <li>
                <a href="">Near by Salons</a>
              </li>
              <li>
                <a href="">Product Shop</a>
              </li>
              <li>
                <a href="">Franchise</a>
              </li>
            </ul>
          </div>
          <div className="contact-content-link2">
            <ul>
              <li>
                <a href="">Appointment Query</a>
              </li>
              <li>
                <a href="">I'm a Beautician </a>
              </li>
              <li>
                <a href="">See map</a>
              </li>
              <li>
                <a href="">App Download</a>
              </li>
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Buy Subcription</a>
              </li>
              <li>
                <a href="">Client Review</a>
              </li>
            </ul>
          </div>
          <div className="contact-content-socialMedia">
            <p>Customer Care</p>
            <h3>
              +91 98674566
              <br />
              hsbp@gmail.com
            </h3>
            <p>Contact</p>
            <div className="icon-container">
              <FacebookOutlined className="icon"/>
              <InstagramOutlined className="icon"/>
              <TwitterOutlined className="icon"/>
              <LinkedinOutlined className="icon"/>
            </div>
          </div>
        </div>
        <div className="city-name">
          <div className="line margin-bottom"></div>
          <div className="city-name-content">
            <p>
              Noida | Delhi | Indore | Bangalore | Pune | Hyderabad | Kolkata |
              Konchi | Kanpur | Raipur | Ranchi | Bangalore | Pune | Ranchi
            </p>
            <p>
              Noida | Delhi | Indore | Bangalore | Pune | Ranchi | Bangalore |
              Pune | Ranchi
            </p>
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="city-name-content">
        <p>Copyright © 2021 Home Service Beauty Parlor</p>
        <p>
          All right reserved | Terms of Use | Privacy Policy. Design and Powered
          by Abym Technology
        </p>
      </div>
    </div>
  );
};

export default Contact;
