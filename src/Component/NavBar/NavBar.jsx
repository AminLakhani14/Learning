import React, { useState } from "react";
import "./navbar.css";
import Ropstam from "../../Images/ropstamcolorlogo.png";
function Navbar() {
    const [click, setClick] = useState(false);
    const changeClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
    <div>
      <nav >
        <img
            data-aos="fade-up"
            src={Ropstam}
            width="200"
            id='headerLogo'
            height="60"
          ></img>

        <label for="drop" class="toggle" onClick={changeClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </label>
        <input type="checkbox" id="drop" />
        <ul class="menu">
          <li>
            <label for="drop-1" class="toggle">
              Services +
            </label>
            <a href="#">Services</a>
            <input type="checkbox" id="drop-1" />
            <ul>
              <li>
                <a href="#">Themes and stuff</a>
              </li>
              <li>
                <a href="#">Plugins</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
            </ul>
          </li>
          <li>
            <label for="drop-2" class="toggle">
              Work +
            </label>
            <a href="#">Work</a>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Links</a>
              </li>
              <li>
                <label for="drop-3" class="toggle">
                  Tutorials +
                </label>
                {/* <a href="#">Tutorials</a>
                <input type="checkbox" id="drop-3" />

                <ul>
                  <li>
                    <a href="#">HTML/CSS</a>
                  </li>
                  <li>
                    <a href="#">jQuery</a>
                  </li>
                  <li>
                    <a href="#">Other</a>
                  </li>
                </ul> */}
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="display-none" style={{width:'15%'}}>
        <h5 className="headercontact me-3 mt-2 float-md-end">+92123456789</h5>
        </div>
          <button className=" display-none headerMenuButton mx-2"><b>Contact Us</b></button>
      </nav>
      </div>
    </>
  );
}

export default Navbar;
