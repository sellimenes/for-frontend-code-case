import React from "react";
import styles from "./Cards.module.css";

const Cards = ({results}) => {

  let display;
  if(results){
    display = `${results.length} karakter bulundu.`
  }else{
    display = "Aramanız ile eşleşen bir karakter bulunamadı."
  }

  return <div>{display}</div>;
};

export default Cards;
