// Write your Character component here
import React from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const Character = props => {
  const char = props.charInfo;
  return (
    <div className="character">
      {/* <img src={char.image} />
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
      </div> */}
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={char.image} alt={char.name} />
          <CardBody>
            <CardTitle>{char.name}</CardTitle>
            <CardSubtitle>{char.species}</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </div> // close character
  );
}

export default Character;