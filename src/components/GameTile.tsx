import type { Player } from '../types'

type GameTileProps = {
  value: Player | null
  onClick?: () => void
}

function GameTile({ value, onClick }: GameTileProps) {
  const getTileColor = () => {
    if (value === 'X') return 'text-brand-primary'
    if (value === 'O') return 'text-brand-accent'
  }

  return (
    <button
      className={`border-ui-tertiary size-20 cursor-pointer rounded-2xl border-2 text-2xl font-bold md:size-24 ${getTileColor()}`}
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
      }}
    >
      {value}
    </button>
  )
}

export default GameTile
