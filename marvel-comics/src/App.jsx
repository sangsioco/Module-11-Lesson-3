import React, { useState } from 'react';
import CharacterList from './components/characterlist';
import CharacterDetail from './components/characterdetail';
import './marvel.css';

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const handleCharacterClick = (characterId) => {
    setSelectedCharacterId(characterId);
  };

  return (
    <div className="app">
      <h1>Marvel Comics Character Viewer</h1>
      <CharacterList onCharacterClick={handleCharacterClick} />
      {selectedCharacterId && <CharacterDetail characterId={selectedCharacterId} />}
    </div>
  );
};

export default App;
