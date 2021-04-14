import Image from 'next/image'
import React, { useState } from 'react'
import Styles from './Players.module.scss'

interface Props {
  onChange: (arr: any[]) => void
  players: string[]
}

export const Players: React.FC<Props> = ({ onChange, players }) => {
  const [player1, setPlayer1] = useState(players[0])
  const [player2, setPlayer2] = useState(players[1])

  const handlePlayer1 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlayer1(event.target.value)
    onChange([event.target.value, player2])
  }

  const handlePlayer2 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlayer2(event.target.value)
    onChange([player1, event.target.value])
  }

  return (
    <div className={Styles.Container}>
      <div className={Styles.Player}>
        <div className={Styles.PlayerLeftImage}>
          <Image
            src='/x.png'
            height={20}
            width={20}
          />
        </div>
        <div className={Styles.PlayerInput}>
          <label htmlFor='player1' className={Styles.Label}>Player 1</label>
          <input
            value={player1}
            id='player1'
            type='text'
            placeholder='Name'
            onChange={handlePlayer1}
            className={Styles.Input}
          />
        </div>
      </div>
      <div className={Styles.Player}>
        <div className={Styles.PlayerInput}>
          <label htmlFor='player2' className={Styles.Label}>Player 2</label>
          <input
            value={player2}
            id='player2'
            type='text'
            placeholder='Name'
            onChange={handlePlayer2}
            className={Styles.Input}
          />
        </div>
        <div className={Styles.PlayerRightImage}>
          <Image
            src='/o.png'
            height={20}
            width={20}
          />
        </div>
      </div>
    </div>
  )
}
