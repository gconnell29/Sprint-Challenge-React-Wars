import React, { useState, useEffect } from 'react';
import Character from "./components/Character";
import axios from "axios";
import './App.css';

const App = props => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacter] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacter(response.data.results);
      // console.log('Api info:', characters);
    })
    .catch(error => console.log('Error:', error))
  }, [])
  console.log('Api info:', characters);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="charContainer">
        {
          characters.map((character, index) => {
            return <Character charInfo={character} key={character.id} />
          })
        }
      </div>
    </div>
  );
}

export default App;
