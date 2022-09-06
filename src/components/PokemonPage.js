import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ listShown, searchList, addPlayer }) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPlayer={addPlayer}/>
      <br />
      <Search searchList={searchList}/>
      <br />
      <PokemonCollection list={listShown}/>
    </Container>
  );
}

export default PokemonPage;
