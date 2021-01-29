import React, {useState} from 'react'

export const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const nextValue = calculateNextValue(squares)
  const winner = calculateWinner(squares)

  const selectSquare = (position) => {
    const squaresCopy = [...squares]
    squaresCopy[position] = nextValue
    setSquares(squaresCopy)
  }

  const renderSquare = (position) => {
    return (
      <button onClick={() => selectSquare(position)}>
        {squares[position]}
      </button>
    )
  }

  return (
    <div>
      <div>{winner}</div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

const calculateNextValue = (squares) => {
  const xSquaresCount = squares.filter(s => s === 'X').length
  const oSquaresCount = squares.filter(s => s === 'O').length

  return xSquaresCount === oSquaresCount ? 'X' : 'O'
}

const calculateWinner = (squares) => {
  const winnerOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < winnerOptions.length; i++) {
    const [a, b, c] = winnerOptions[i]

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}