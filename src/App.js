import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
function App() {
  const [pageNumber, letPageNumber] = useState(1);
  const[fetchedData, setFetchedData] = useState([])
  const {info, results} = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <>
      <Header />
      <Cards results={results} />
    </>
  );
}

export default App;
