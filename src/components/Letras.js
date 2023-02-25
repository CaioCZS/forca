import BotaoLetra from "./BotaoLetra";

export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    return(
        <div className="letras">
            <div className="botoesLetras">
            {alfabeto.map(l =><BotaoLetra letra={l}/> )}
            </div>
        </div>
    )
}