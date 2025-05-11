import { useState } from 'react'

import { Gamepad2 } from 'lucide-react'

import GameBoard from './components/GameBoard'

import type { Board } from './types'

function App() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null))

  const currentPlayer = board.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
  const currentPlayerText = `Player ${currentPlayer}'s turn`

  const handleTileClick = (index: number) => {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard]
      if (newBoard[index - 1] === null) {
        newBoard[index - 1] = currentPlayer
      }
      return newBoard
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="bg-ui-secondary w-full max-w-md rounded-xl p-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center gap-2">
            <Gamepad2 size={24} className="text-brand-primary" />
            <h1 className="text-2xl leading-0 font-bold">Tic Tac Toe!</h1>
          </div>
          <span className="text-gray-400">{currentPlayerText}</span>
          <GameBoard board={board} onClick={handleTileClick} />
        </div>
      </div>
    </main>
  )
}

export default App
