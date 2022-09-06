import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, front, back}) {
  const [ flipped, setFlipped ] = useState(false);
  
  function flip() {
    setFlipped(flipped => !flipped);
  }

  return (
    <Card>
      <div onClick={flip}>
        <div className="image">
          <img src={flipped ? back : front} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
