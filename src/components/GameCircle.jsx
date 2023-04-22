import '../Game.css'

const GameCircle = ({id,children,className,onCircledClicked}) => {
   
   
  return (
    <div  onClick={()=>onCircledClicked(id)}  className={`gameCircle ${className} player_0`} >
    {children}
    </div>
  )
}

export default GameCircle
