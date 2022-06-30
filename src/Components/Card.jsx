import React from "react";
import styles from "./Card.module.css";

const Card = ({results}) => {
  const {name, status, species, image, location} = results; // Results deconstruction
  
  let statusColor;
  let charStatus;
  if(status === "Alive"){
    charStatus =  <p className={`${styles.charStatus} ${styles.bgGreen}`}>{status}</p>
  } else if(status === "Dead"){
    charStatus =  <p className={`${styles.charStatus} ${styles.bgRed}`}>{status}</p>
  } else{
    charStatus =  <p className={`${styles.charStatus} ${styles.bgGrey}`}>{status}</p>
  }
  
  return <div className={styles.card}>
    <div className={styles.charImage}>
      <img src={image} alt={name} />
      {/* <p className={`${styles.charStatus}`}>{status}</p> */}
      {charStatus}
    </div>
    <div className={styles.meta}>
      <h2>{name}</h2>
      <small>Last Known Location</small>
      <h3>{location.name}</h3>
    </div>
  </div>;
};

export default Card;
