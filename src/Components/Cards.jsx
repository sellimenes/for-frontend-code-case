import React from "react";
import styles from "./Cards.module.css";
import Card from './Card'

const Cards = ({results}) => {
  let display;
  if(results){
    display = results.map((character) => {
      return <Card key={character.id} results={character} />
    })
  } else{
    <p>Gösterilecek sonuç yok deneme.</p>
  }

  return <div className={styles.cardsWrapper}>{display}</div>;
};

export default Cards;
