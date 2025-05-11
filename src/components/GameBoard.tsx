import GameTile from './GameTile'

function GameBoard() {
  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
    </div>
  )
}

export default GameBoard
