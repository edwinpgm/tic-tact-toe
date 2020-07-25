import React from 'react'

const PartGame = ({ value, onSubmit, disabled }) => {
  return (
    <>
      {
        disabled
        ? <span>{value}</span>
        : <a href="#" onClick={onSubmit}>
          {value}
        </a>
      }
    </>
  )
}

export default PartGame
