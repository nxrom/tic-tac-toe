import type { Board } from '../types'
import GameTile from './GameTile'

type GameBoardProps = {
  board: Board
  onClick: (index: number) => void
}

function GameBoard({ board, onClick }: GameBoardProps) {
  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {board.map((value, index) => (
        <GameTile
          value={value}
          key={index}
          onClick={() => onClick(index + 1)}
        />
      ))}
    </div>
  )
}

export default GameBoard
