import Head from 'next/head'
import React from 'react'
import { Container } from '../components/Container'
import { Game } from '../components/Game'

const Index: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Game Tic Tac Toe</title>
      </Head>
      <h1>Tic Tac Toe</h1>
      <Game />
    </Container>
  )
}

export default Index
