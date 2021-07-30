import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState(true);

  const iconStyle = {
    width: "100%",
    height: "100%",
    color: "white",
    cursor: "pointer",
  };

  document.querySelectorAll(".nav-link").forEach((el) =>
    el.addEventListener("click", () => {
      setMenu(true);
    })
  );

  const onMenu = (e) => {
    setMenu(!menu);
  };
  window.onresize = () => {
    if (window.innerWidth >= 800) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return (
    <header className="header">
      <div className="header-items">
        <Link to="/" className="header-logo">
          <img src={logo} alt="logo" style={{ width: "40%" }} />
          <h2>NamozUz</h2>
        </Link>
        <ul className={menu ? "header-ul" : "header-ul-res"}>
          <li>
            <Link to="/tahorat" className="nav-link">
              Tahorat
            </Link>
          </li>
          <li>
            <Link to="/gusl" className="nav-link">
              G'usl
            </Link>
          </li>
          <li className={menu ? "namoz" : "namoz-res"}>
            <Link to="#">Namoz</Link>
            <ul>
              <li>
                <Link to="/bomdod" className="nav-link">
                  Bomdod
                </Link>
              </li>
              <li>
                <Link to="/peshin" className="nav-link">
                  Peshin
                </Link>
              </li>
              <li>
                <Link to="/asr" className="nav-link">
                  Asr
                </Link>
              </li>
              <li>
                <Link to="/shom" className="nav-link">
                  Shom
                </Link>
              </li>
              <li>
                <Link to="/xufton" className="nav-link">
                  Xufton
                </Link>
              </li>
            </ul>
          </li>
          <li className={menu ? "namoz" : "namoz-res"}>
            <Link to="#">Yana</Link>
            <ul>
              <li>
                <Link to="/juma" className="nav-link">
                  Juma
                </Link>
              </li>
              <li>
                <Link to="/hayit" className="nav-link">
                  Hayit
                </Link>
              </li>
              <li>
                <Link to="/janoza" className="nav-link">
                  Janoza
                </Link>
              </li>
              <li>
                <Link to="/tarobeh" className="nav-link">
                  Tarobeh
                </Link>
              </li>
              <li>
                <Link to="/nafl" className="nav-link">
                  Nafl
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/developer" className="nav-link">
              Dasturchidan
            </Link>
          </li>
        </ul>
        <div className="header-menu">
          <button onClick={onMenu}>
            {menu ? (
              <FaBars style={iconStyle} />
            ) : (
              <FaTimes style={iconStyle} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
