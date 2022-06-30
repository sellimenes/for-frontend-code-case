import React from "react";
import styles from "./Card.module.css";

const Card = ({results}) => {
  const {name, status, species, image, location} = results; // Results deconstruction
  return <div className={styles.card}>
    <img src={image} alt={name} />
    <div className={styles.meta}>
    <h2>{name}</h2>
    <small>Last Known Location</small>
    <h3>{location.name}</h3>
    </div>
  </div>;
};

export default Card;
