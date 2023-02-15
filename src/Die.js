import one from "./images/1.png"
import two from "./images/2.png"
import three from "./images/3.png"
import four from "./images/4.png"
import five from "./images/5.png"
import six from "./images/6.png"
export default function Die({value, isHeld, holdDice}){
    const style = {
        backgroundColor: isHeld? "#8AC5DC" : "white",
    }
    const images = {1: one,
                    2: two,
                    3: three,
                    4: four,
                    5: five,
                    6: six 
                }
    return(
    <div 
        className="die-face" 
        style = {style}
        onClick = {holdDice} 
        >
        <h2 className="die-num">
            <img className="dots" src={images[value]} alt="dice"/>
        </h2>
    </div>
    )

}