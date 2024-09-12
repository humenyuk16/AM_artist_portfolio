import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Line from "../Line";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    document.body.className = i18n.language;
  }, [i18n.language]);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <p className="logo">ANASTASIA MAKOVETSKAYA</p>
        </div>
        <div className="navigation-content">
          <div className="items-container">
            <ul className="items">
              <li className="item">
                <a href="#works">{t("works")}</a>
              </li>
              <li className="item">
                <a href="#about">{t("author")}</a>
              </li>
              <li className="item">
                <a href="#contacts">{t("contacts")}</a>
              </li>
            </ul>
          </div>
          <div className="lang-btn-container">
            <button
              className={i18n.language === "uk" ? "active" : ""}
              onClick={() => toggleLanguage("uk")}
            >
              UA
            </button>
            <span>|</span>
            <button
              className={i18n.language === "en" ? "active" : ""}
              onClick={() => toggleLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </div>
      <Line />
    </nav>
  );
};

export default Navbar;
