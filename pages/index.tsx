import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Game } from '../components/Game'
import { Tabs } from '../components/Tabs'

const Index = () => {
  const TAB_OPTIONS = [
    {id: 'vs', label: '👾 VS'},
    {id: 'bot', label: '🤖 bot'},
  ]

  const [mode, setMode] = useState('vs')
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')

  useEffect(() => {
    if (mode === 'bot') {
      setPlayer2('🤖 bot')
    } else {
      setPlayer2('')
    }
  }, [mode])

  return (
    <div>
      <Head>
        <title>Game Tic Tac Toe</title>
      </Head>
      <h1>Tic Tac Toe</h1>
      <Tabs options={TAB_OPTIONS} onChange={setMode} />

      <div>
        <label htmlFor="player1">Player 1</label>
        <input
          value={player1}
          id="player1"
          type="text"
          placeholder="Player 1"
          onChange={event => setPlayer1(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="player2">Player 2</label>
        <input
          value={player2}
          id="player2"
          type="text"
          placeholder="Player 2"
          onChange={event => setPlayer2(event.target.value)}
          disabled={mode === 'bot'}
        />
      </div>
      <Game mode={mode} />
    </div>
  )
}

export default Index