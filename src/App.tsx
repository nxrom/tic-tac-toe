import { Gamepad2 } from 'lucide-react'
import GameBoard from './components/GameBoard'

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="bg-ui-secondary w-full max-w-md rounded-xl p-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center gap-2">
            <Gamepad2 size={24} className="text-brand-primary" />
            <h1 className="text-2xl leading-0 font-bold">Tic Tac Toe!</h1>
          </div>
          <span className="text-gray-400">Player X's turn</span>
          <GameBoard />
        </div>
      </div>
    </main>
  )
}

export default App
