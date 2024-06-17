import "./Footer.css";
import logo from "../Navbar/img/Frame.png";
import like from "../Navbar/img/Frame 142.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="foot">
          <p>ALL PRODUCTS</p>
          <p>|</p>
          <p>ABOUT SEEDRA</p>
          <p>|</p>
          <p>BLOG</p>
          <img src={logo} alt="" />
          <p>OUR BLOG</p>
          <p>|</p>
          <p>Terms&Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
        <div className="foot1">
          <img src={like} alt="" />
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
