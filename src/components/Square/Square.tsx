import { TICK, CROSS, EMPTY } from "../../constants";
import Cross from './../Cross/Cross';
import Tick from '../Tick/Tick';
import "./square.css";

function Square({ position, value, playerTurn }: {
    position: any;
    value: any;
    playerTurn: any;
}): JSX.Element {

    
    const handleClick = () => {
        if (value === EMPTY)
            playerTurn(position);
    }
    return (
        <div onClick={handleClick} className="square">
            {value === TICK && <Tick />}
            {value === CROSS && <Cross />}
        </div>
    )
}

export default Square


