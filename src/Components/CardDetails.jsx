import React, { useEffect, useState } from "react";
import styles from "./CardDetails.module.css";
import Header from "./Header";
import { useParams } from "react-router-dom";

const CardDetails = (results) => {
  let { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);
  const { info, setInfo } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  let { name, location, origin, species, status, image, gender, episode } =
    fetchedData;
  console.log(info);

  let charStatus;
  if (status === "Alive") {
    charStatus = (
      <p className={`${styles.charStatus} ${styles.bgGreen}`}>{status}</p>
    );
  } else if (status === "Dead") {
    charStatus = (
      <p className={`${styles.charStatus} ${styles.bgRed}`}>{status}</p>
    );
  } else {
    charStatus = (
      <p className={`${styles.charStatus} ${styles.bgGrey}`}>{status}</p>
    );
  }

  return (
    <>
      <Header />
      {!info && (
        <div className={styles.cardDetail}>
          <img src={image} alt={name} />
          {charStatus}
          <h2>{name}</h2>
          <ul>
            <li>Type: {species}</li>
            <li>Gender: {gender}</li>
            <li>Origin: {origin.name}</li>
            <li>Seen: {episode.length} time(s)</li>
            <li>Last Seen: {location.name}</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default CardDetails;
