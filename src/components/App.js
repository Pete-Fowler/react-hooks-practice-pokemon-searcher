import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [ list, setList ] = useState([]);
  const [ term, setTerm ] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => setList(data))
  }, [])

  function searchList(string) {
    setTerm(string);
  }

  const listShown = list.filter(item => item.name.includes(term));

  return (
    <div className="App">
      <PokemonPage listShown={listShown} searchList={searchList}/>
    </div>
  );
}

export default App;
