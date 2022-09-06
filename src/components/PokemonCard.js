import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, front, back}) {
  return (
    <Card>
      <div>
        <div className="image">
          <img src={front} alt={name} />
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
