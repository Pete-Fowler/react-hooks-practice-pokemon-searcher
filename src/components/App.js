import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [ list, setList ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => setList(data))
  }, [])

  const listShown = list;

  return (
    <div className="App">
      <PokemonPage listShown={listShown}/>
    </div>
  );
}

export default App;
