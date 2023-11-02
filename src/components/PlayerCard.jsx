const PlayerCard =({ player }) => {
  return (
    <div className="card">
      <div><strong>Real Name:</strong> {player.realName}</div>
      <div><strong>Player Name:</strong> {player.playerName}</div>
      <div><strong>Asset:</strong> {player.asset}</div>
    </div>
  );
}

export default PlayerCard;
