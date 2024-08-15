import { TICK, CROSS, EMPTY } from "../../constants";
import styled from "styled-components";
import "./resultScreen.css";
import { TTT } from './../../models/models';
// import { Button } from '@mui/material';



const RESULTDIV = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const RH1 = styled.h1`
    margin: 200px 0 50px 0;
    font - size: 3.5rem;
`

interface Props {
    resetGame: () => void;
    winner: string | null; 
    setWinner?: React.SetStateAction<string | null>
}

// function ResultScreen: React.FunctionComponent<Props> = ({ props, winner, resetGame }) => {

const ResultScreen: React.FC<Props> = ({ winner, resetGame }) => {


    return (
        <>
            <RESULTDIV>
                <RH1>
                    {winner === EMPTY && "Its a Tie"}
                    {winner === TICK && "TICK PLAYER  Won The Game"}
                    {winner === CROSS && "Cross PLAYER Won The Game"}
                </RH1>
                <button className="button" onClick={() => resetGame()}>
                    RESET GAME
                </button>
                {/* <Button className="button" onClick={() => resetGame()}>
                    Update
                </Button> */}
            </RESULTDIV>
        </>
    )
}

export default ResultScreen