export default function Die({value, isHeld, holdDice}){
    const style = {
        backgroundColor: isHeld? "#59E391" : "white"
    }
    return(
    <div 
        className="die-face" 
        style={style}
        onClick={holdDice} 
        >
        <h2 className="die-num">{value}</h2>
    </div>
    )

}