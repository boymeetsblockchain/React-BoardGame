import '../Game.css'

const GameCircle = ({id,children}) => {
    const onClick = (id)=>{
        alert('clicked' + id) 
    }
   
  return (
    <div  onClick={()=>onClick(id)}  className={`gameCircle ${id %2 ===0 ?"odd" : "even"}`} >
    {children}
    </div>
  )
}

export default GameCircle