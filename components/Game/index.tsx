import Image from 'next/image'
import React, { useState } from 'react'
import { Players } from '../Players'
import { Square } from '../Square'
import Styles from './Game.module.scss'

export const Game: React.FC = () => {
  const [players, setPlayers] = useState(['Ana', 'Salvador'])
  const [squares, setSquares] = useState(Array(9).fill(null))
  const nextValue = calculateNextValue(squares)
  const winner = calculateWinner(squares, players)

  const selectSquare = (position: number): void => {
    if (winner !== '-') {
      return false
    }
    const squaresCopy = [...squares]
    squaresCopy[position] = nextValue
    setSquares(squaresCopy)
  }

  return (
    <div>
      <div className={Styles.Winner}>Winner: {winner}</div>

      <div className={Styles.Squares}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(position => (
          <Square
            key={position}
            onSelect={() => selectSquare(position)}
          >
            {squares[position] === 'X' && (
              <Image
                src='/x.svg'
                height={30}
                width={30}
              />
            )}
            {squares[position] === 'O' && (
              <Image
                src='/o.svg'
                height={30}
                width={30}
              />
            )}
          </Square>
        ))}
      </div>

      <Players
        players={players}
        onChange={setPlayers}
      />
    </div>
  )
}

const calculateNextValue = (squares: any[]): string => {
  const xSquaresCount = squares.filter(s => s === 'X').length
  const oSquaresCount = squares.filter(s => s === 'O').length

  return xSquaresCount === oSquaresCount ? 'X' : 'O'
}

const calculateWinner = (squares: any[], players: string[]): string|null => {
  const winnerOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < winnerOptions.length; i++) {
    const [a, b, c] = winnerOptions[i]

    if (squares[a] != null && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log(squares[a])
      return squares[a] === 'X' ? players[0] : squares[a] === 'O' ? players[1] : null
    }
  }

  return '-'
}
