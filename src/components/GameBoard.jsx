
import GameCircle from "./GameCircle"
import '../Game.css'
import { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { isDraw, isWinner,getComputerMove } from "../helper"

import {GAME_STATE_PLAYING,NO_PLAYER,NO_CiRCLES,GAME_STATE_WIN,PLAYER_1,PLAYER_2, GAME_STATE_DRAW} from '../constants'

export default function GameBoard() {
  const [gameBoard,setGameBoard]= useState(Array(NO_CiRCLES).fill(NO_PLAYER))
  const [currentPlayer, setCurrentPlayer]= useState(PLAYER_1)
  const [gamestate, setGamestate]= useState(GAME_STATE_PLAYING)
  const [winplayer,setWinplayer]= useState(NO_PLAYER)
 const initBoard =()=>{
   const circles =[]
   for(let i =0; i <NO_CiRCLES; i++ ){
    circles.push(renderCircle(i))
   }
   return circles
 }

  const circleClicked =(id)=>{
    console.log("circle clicked" + id)
    if(gameBoard[id]!==NO_PLAYER) return ;
    if(gamestate!== GAME_STATE_PLAYING) return;

    if(isWinner(gameBoard,id,currentPlayer)){
     setGamestate(GAME_STATE_WIN)
     setWinplayer(currentPlayer)
    }
    if(isDraw(gameBoard,id,currentPlayer)){
      setGamestate(GAME_STATE_DRAW)
      setWinplayer(NO_PLAYER)
     }
     const board = [...gameBoard]
     board[id]=currentPlayer
     setGameBoard(prev =>{
      return prev.map((circle,pos)=>{
         if(pos===id) return currentPlayer;
         return circle
      })
     })

     setCurrentPlayer(currentPlayer===PLAYER_1 ? PLAYER_2: PLAYER_1)
    console.log(gameBoard)
    console.log(currentPlayer)
  }

  const renderCircle =(id)=>{
     return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircledClicked={circleClicked}/>
  }
  const initGame =()=>{
    setGamestate(GAME_STATE_PLAYING)
    setGameBoard(Array(NO_CiRCLES).fill(NO_PLAYER))
    setGamestate(GAME_STATE_PLAYING)
   
  }
  useEffect(()=>{
  initGame()
  },[])
  
  const suggestMove =()=>{
   circleClicked(getComputerMove(gameBoard))
  }
  return (
    <>
     <Header currentPlayer={currentPlayer} gamestate={gamestate} winplayer={winplayer}/>
      <div className="gameBoard">
    {
      initBoard()
    }
    </div>
    <Footer initGame={initGame} suggestMove={suggestMove} gamestate={gamestate}/>
    </>
   
  )
}
