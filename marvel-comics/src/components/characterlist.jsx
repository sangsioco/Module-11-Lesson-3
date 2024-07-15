import React, { useState, useEffect } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';

const CharacterList = ({ onCharacterClick }) => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=c642fb55c89c4eb1fcf4617dffa6770e&hash=200e12ef7b86e3be28d79f838b4aebdf')
      .then(response => {
        setCharacters(response.data.data.results);
      })
      .catch(error => {
        console.error("Error fetching characters:", error);
        setError("Failed to fetch characters. Please try again later.");
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="character-list">
      {characters.map(character => (
        <div key={character.id} onClick={() => onCharacterClick(character.id)}>
          <img 
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
            alt={`${character.name} thumbnail`} 
          />
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
};

CharacterList.propTypes = {
  onCharacterClick: PropTypes.func.isRequired
};

export default CharacterList;
