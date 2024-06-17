import "./Footer.css";
import logo from "../Navbar/img/Frame.png";
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
        <div className="foot1"></div>
      </div>
    </div>
  );
};

export default Footer;
