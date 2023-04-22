import React from 'react'
import '../Game.css'
import {GAME_STATE_DRAW, GAME_STATE_PLAYING,GAME_STATE_WIN} from '../constants'
const Header = ({currentPlayer,gamestate,winplayer}) => {
  const renderLabel =()=>{
    switch(gamestate){
      case GAME_STATE_PLAYING:
       return <>Player {currentPlayer} turn</>
      case GAME_STATE_WIN:
        return <>Player {winplayer} wins</>
        case GAME_STATE_DRAW:
          return <>Draw</>
        default:
    }
  }
  return (
    <div className="panel header">
    <div className="header-text">{renderLabel()}</div>
    </div>
  )
}

export default Header