import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.header}>
        <span className={styles.red}>For</span> Frontend Code Case
      </h1>
      <h2 className={styles.red}>Rick and Morty Wiki</h2>
    </div>
  );
};

export default Header;
