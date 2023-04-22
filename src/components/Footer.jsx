import React from 'react'
import '../Game.css'
import {
  GAME_STATE_PLAYING
} from '../constants'
const Footer = ({initGame,suggestMove,gamestate}) => {

  return (
    <div className=" panel footer">
      {
        gamestate===GAME_STATE_PLAYING && 
        <button onClick={suggestMove}>suggest</button>
      }
       {
        gamestate !==GAME_STATE_PLAYING&& 
        <button onClick={initGame} >New Game</button>
      }
    </div>
  )
}

export default Footer