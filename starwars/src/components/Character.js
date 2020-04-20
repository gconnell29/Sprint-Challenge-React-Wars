// Write your Character component here
import React from "react";

const Character = props => {
  const char = props.charInfo;
  return (
    <div className="character">
      <img src={char.image} />
      <div className="heading">
        <h2>{char.name}</h2>
        <span>{char.id}</span>
      </div>
      <div className="stats">
        <div className="statRow">
          <span>Status</span>
          <span>{char.status}</span>
        </div>
        <div className="statRow">
          <span>Species</span>
          <span>{char.species}</span>
        </div>
        <div className="statRow">
          <span>Gender</span>
          <span>{char.gender}</span>
        </div>
        <div className="statRow">
          <span>Location</span>
          <span>{char.location.name}</span>
        </div>
        <div className="statRow">
          <span>Type</span>
          <span>{char.type}</span>
        </div>
      </div>
    </div> // close character
  );
}

export default Character;