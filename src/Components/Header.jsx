import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.header}>
        <span className={styles.red}>For</span> Frontend Code Case
      </h1>
      <Link to={`/`} className={styles.red}>
        Rick and Morty Wiki
      </Link>
    </div>
  );
};

export default Header;
