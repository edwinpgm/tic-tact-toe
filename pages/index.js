import React, { useState, useEffect } from 'react'
import PartGame from '../components/PartGame'

const Index = () => {
  const DEFAULT_RESULT = ['__', '__', '__', '__', '__', '__', '__', '__', '__']
  const WINNERS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  const options = ['O', 'X']
  const optionUser = options[0]
  const optionAI = options[1]

  const [result, updateResult] = useState(DEFAULT_RESULT)
  const [winner, updateWinner] = useState(false)

  const handleSubmit = (position) => {
    const resultCopy = [...result]
    resultCopy[position] = optionUser
    updateResult(resultCopy)

    const positionRandom = generateRandom(resultCopy)
    resultCopy[positionRandom] = optionAI
    updateResult(resultCopy)
  }

  const restart = () => {
    updateResult(DEFAULT_RESULT)
    updateWinner(false)
  }

  useEffect(() => {
    const missingOptions = result.filter(r => r === '__')
    
    if (missingOptions.length < 5) {
      const isUserWinner = checkWinner(result, optionUser)
      if (isUserWinner) {
        updateWinner('You win 💪')
        return
      }

      const isAIWinner = checkWinner(result, optionAI)
      if (isAIWinner) {
        updateWinner('AI Win 🤖')
        return
      }
    }
    
    if (missingOptions.length === 0) {
      updateWinner('Try again 🤷‍♂️')
    }  
  }, [result])

  const checkWinner = (checkResult, type) => {
    const listChosenIndexes = checkResult.map((item, index) => {
      return item === type ? index : '__'
    }).filter(item => item !== '__')

    let isWinner = false
    let i = 0
    do {
      isWinner = WINNERS[i].every(item => {
        const indexFounded = listChosenIndexes.indexOf(item)
        return indexFounded > -1
      })
      i++
    } while (i < WINNERS.length && !isWinner)

    return isWinner
  }

  const generateRandom = (resultCopy) => {
    let random
    let indexNotPermit = resultCopy.map((item, index) => {
      return item === '__' ? item : index
    }).filter(item => item !== '__')

    if (indexNotPermit.length === 9) {
      return 9
    } else {
      do {
        random = Math.floor(Math.random() * 9)
      }
      while (indexNotPermit.indexOf(random) > -1)
      
      return random
    }
  }

  return (
    <div>
      <h1>Tic toc toe</h1>
      <p>Result: {winner}</p>
      <p>{winner && <a href='#' onClick={restart}>Restablecer</a>}</p>
      <div>
        <div>
          <PartGame
            value={result[0]}
            onSubmit={() => handleSubmit(0)}
            disabled={winner || result[0] !== '__'}
          />
          |
          <PartGame
            value={result[1]}
            onSubmit={() => handleSubmit(1)}
            disabled={winner || result[1] !== '__'}
          />
          |
          <PartGame
            value={result[2]}
            onSubmit={() => handleSubmit(2)}
            disabled={winner || result[2] !== '__'}
          />
        </div>
        <div>
          <PartGame
            value={result[3]}
            onSubmit={() => handleSubmit(3)}
            disabled={winner || result[3] !== '__'}
          />
          |
          <PartGame
            value={result[4]}
            onSubmit={() => handleSubmit(4)}
            disabled={winner || result[4] !== '__'}
          />
          |
          <PartGame
            value={result[5]}
            onSubmit={() => handleSubmit(5)}
            disabled={winner || result[5] !== '__'}
          />
        </div>
        <div>
          <PartGame
            value={result[6]}
            onSubmit={() => handleSubmit(6)}
            disabled={winner || result[6] !== '__'}
          />
          |
          <PartGame
            value={result[7]}
            onSubmit={() => handleSubmit(7)}
            disabled={winner || result[7] !== '__'}
          />
          |
          <PartGame
            value={result[8]}
            onSubmit={() => handleSubmit(8)}
            disabled={winner || result[8] !== '__'}
          />
        </div>
      </div>
    </div>
  )
}

export default Index