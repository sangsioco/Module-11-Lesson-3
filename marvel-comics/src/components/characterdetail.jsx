import React, { useState, useEffect } from "react";
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (characterId) {
      axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=c642fb55c89c4eb1fcf4617dffa6770e&hash=200e12ef7b86e3be28d79f838b4aebdf`)
        .then(response => {
          setCharacter(response.data.data.results[0]);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching character details:", error);
          setLoading(false);
        });
    }
  }, [characterId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!character) {
    return <p>No character selected</p>;
  }

  return (
    <div className="character-detail">
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <h3>Comics</h3>
      <ul>
        {character.comics.items.map((comic, index) => (
          <li key={index}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
