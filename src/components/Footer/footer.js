import React from "react";
import "./footer.css";
import telegram from "../../images/telegram.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.jpg";

const Footer = () => {
  const linkF = `https://facebook.com/sharer/sharer.php?u=${window.location.href}`;
  const linkT = `https://telegram.me/share/url?url=${window.location.href}/&text=Namoz o'qishni o'rganuvchilar uchun`;
  const linkTw = `https://twitter.com/share?url=${window.location.href}/`;

  return (
    <div className="footer">
      <center>
        <h2>&copy;NamozUz {new Date().getFullYear()}</h2>
      </center>
      <div>
        <ul className="footer-links">
          <li>
            <b style={{ fontSize: "1.2em", marginBottom: "10px" }}>
              Do'stlarga ulashish
            </b>
          </li>
          <li>
            <a rel="nofollow noopener noreferrer" href={linkT} target="_blank">
              <img src={telegram} alt="telegram" style={{ width: "20px" }} />{" "}
              Telegram
            </a>
          </li>
          <li>
            <a rel="nofollow noopener noreferrer" href={linkF} target="_blank">
              <img src={facebook} alt="facebook" style={{ width: "20px" }} />{" "}
              Facebook
            </a>
          </li>
          <li>
            <a rel="nofollow noopener noreferrer" href={linkTw} target="_blank">
              <img src={twitter} alt="twitter" style={{ width: "20px" }} />
              Twitter
            </a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <b style={{ fontSize: "1.2em", marginBottom: "10px" }}>Manbalar</b>
          </li>
          <li>
            <a
              rel="nofollow noopener noreferrer"
              href="https://islom.ziyouz.com/"
              target="_blank"
            >
              islom.ziyouz.com
            </a>
          </li>
          <li>
            <a
              rel="nofollow noopener noreferrer"
              href="https://xutba.uz/"
              target="_blank"
            >
              xutba.uz
            </a>
          </li>
          <li>
            <a
              rel="nofollow noopener noreferrer"
              href="https://quran.com/"
              target="_blank"
            >
              quran.com
            </a>
          </li>
          <li>
            <a
              rel="nofollow noopener noreferrer"
              href="https://aladhan.com/"
              target="_blank"
            >
              aladhan.com
            </a>
          </li>
          <li>
            <a
              rel="nofollow noopener noreferrer"
              href="https://islom.uz/"
              target="_blank"
            >
              islom.uz
            </a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <b style={{ fontSize: "1.2em", marginBottom: "10px" }}>
              Ma'lumot uchun
            </b>
          </li>
          <li>
            <a
              href="https://t.me/uztiger777"
              rel="nofollow noopener noreferrer"
            >
              Aloqa
            </a>
          </li>
          <li>
            <a
              href="https://t.me/uztiger777"
              rel="nofollow noopener noreferrer"
            >
              Taklif uchun
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
