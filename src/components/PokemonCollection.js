import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ list }) {
  
  const cards = list.map(item => 
  <PokemonCard 
    key={item.id}
    name={item.name} 
    hp={item.hp} 
    front={item.sprites.front}
    back={item.sprites.back}
  />);
  
  return (
    <Card.Group >  
      {cards}
    </Card.Group>
  );
}

export default PokemonCollection;
