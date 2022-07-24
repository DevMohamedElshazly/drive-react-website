import React from "react";
import styles from "./Navbar.module.css";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import Logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className="nav__logo">
          <img src={Logo} alt="Drive logo" />
        </a>

        <div className={styles.nav__menu}>
          <ul className={styles.nav__list}>
            <li className="nav__item">
              <a href="#/" className={styles.nav__link}>
                Learn More
              </a>
            </li>

            <li className="nav__item">
              <a href="#/" className={styles.nav__link}>
                Log in
              </a>
            </li>

            <li className="nav__item">
              <a href="#/" className={styles.nav__link}>
                Sign up
              </a>
            </li>

            <li className="nav__item">
              <AiOutlineSearch size={30} style={{ marginTop: "6px" }} />
            </li>

            <li className="nav__item">
              <AiOutlineUser size={30} style={{ marginTop: "6px" }} />
            </li>
          </ul>
        </div>

        <div className={styles.nav__toggle}>
          <AiOutlineMenu size={30} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
