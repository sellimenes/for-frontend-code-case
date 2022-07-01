import React, { useEffect, useState } from "react";
import styles from "./CardDetails.module.css";
import Header from "./Header";
import { useParams } from "react-router-dom";

const CardDetails = ({results}) => {
  let { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);
  let { name, location, origin, species, status, image, gender, episode } =
    fetchedData;
  console.log(fetchedData);

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  
  // Karakterin yaşam durumuna göre rengini değiştirme durumu
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
      {fetchedData ? (
        <div className={styles.cardDetail}>
          <img src={image} alt={name} />
          {charStatus}
          <h2>{name}</h2>
          <ul className={styles.metaLi}>
            <li><span className={styles.detailSpan}>Type:</span> {species}</li>
            <li><span className={styles.detailSpan}>Gender:</span> {gender}</li>
            <li><span className={styles.detailSpan}>Origin:</span> {origin?.name}</li>
            <li><span className={styles.detailSpan}>Seen in:</span> {episode?.length} episode(s)</li>
            <li><span className={styles.detailSpan}>Last Seen:</span> {location?.name}</li>
          </ul>
        </div>
      ): (<p className={styles.loading}>LOADING...</p>)}
    </>
  );
};

export default CardDetails;
