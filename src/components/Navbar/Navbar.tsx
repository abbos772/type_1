import React, { useState } from "react";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "./img/Frame.png";
import logos from "./img/Frame 142.png";
import like from "./img/Frame 7.png";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="navbar">
      <div className="nav container">
        <div className="flex_nav">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <div className={`nav0 ${toggle ? "show" : ""}`}>
            <div className="nav1">
              <p>ALL PRODUCTS</p>
              <h4>|</h4>
              <p>ABOUT SEEDRA</p>
              <h4>|</h4>
              <p>OUR BLOG</p>
              <h4>|</h4>
              <Link to={"/Admin"}>
                {" "}
                <p>CONTACTS</p>{" "}
              </Link>
            </div>
            <div className="nav1">
              <img src={logos} alt="" />
              <div className="search">
                <input type="text" placeholder="Search..." />
              </div>
              <div className="wish">
                <img src={like} alt="" />
              </div>
            </div>
          </div>
          <div className="menu2">
            <img src={like} alt="" />
            <button className="menu" onClick={handleToggle}>
              <CiMenuBurger />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
