import React, { useState } from 'react';
import { players as initialPlayers } from './data';
import PlayerCard from './components/PlayerCard';
import './App.css'

const App = () => {
  const [players, setPlayers] = useState(initialPlayers);
  const [sortOrder, setSortOrder] = useState(""); // "ASC" or "DESC"

  const sortPlayers = (order) => {
    const sorted = [...players].sort((a, b) => {
      if (a.realName < b.realName) return order === "ASC" ? -1 : 1;
      if (a.realName > b.realName) return order === "ASC" ? 1 : -1;
      return 0;
    });
    setPlayers(sorted);
    setSortOrder(order);
  };

  return (
    <div className="app">
      <div className="controls">
        <button onClick={() => sortPlayers("ASC")}>SORT ASC</button>
        <button onClick={() => sortPlayers("DESC")}>SORT DESC</button>
      </div>
      {players.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
    </div>
  );
}

export default App;
