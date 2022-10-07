import { useState, useEffect } from "react";
import { TICK, EMPTY, CROSS } from "./constants";
import './App.css';
import ResultScreen from "./components/ResultScreen/ResultScreen";
import Square from './components/Square/Square';
// import { TTT } from './models/models';

const App: React.FC = () => {
  const [positions, setPositions] = useState<string[]>([
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
  ]);
  const [player, setPlayer] = useState<string>(TICK);
  const [winner, setWinner] = useState<string | null>(null);

  const detectWinner = () => {
    if (
      positions[0] === TICK &&
      positions[1] === TICK &&
      positions[2] === TICK
    )
      return TICK;
    if (
      positions[3] === TICK &&
      positions[4] === TICK &&
      positions[5] === TICK
    )
      return TICK;
    if (
      positions[6] === TICK &&
      positions[7] === TICK &&
      positions[8] === TICK
    )
      return TICK;
    //--------------CROSS
    if (
      positions[0] === CROSS &&
      positions[1] === CROSS &&
      positions[2] === CROSS
    )
      return CROSS;
    if (
      positions[3] === CROSS &&
      positions[4] === CROSS &&
      positions[5] === CROSS
    )
      return CROSS;
    if (
      positions[6] === CROSS &&
      positions[7] === CROSS &&
      positions[8] === CROSS
    )
      return CROSS;
    //------------ End Of 1st Condition ----------

    // Start Of 2nd Condition ---------
    if (
      positions[0] === TICK &&
      positions[3] === TICK &&
      positions[6] === TICK
    )
      return TICK;
    if (
      positions[1] === TICK &&
      positions[4] === TICK &&
      positions[7] === TICK
    )
      return TICK;
    if (
      positions[2] === TICK &&
      positions[5] === TICK &&
      positions[8] === TICK
    )
      return TICK;

    if (
      positions[0] === CROSS &&
      positions[3] === CROSS &&
      positions[6] === CROSS
    )
      return CROSS;
    if (
      positions[1] === CROSS &&
      positions[4] === CROSS &&
      positions[7] === CROSS
    )
      return CROSS;
    if (
      positions[2] === CROSS &&
      positions[5] === CROSS &&
      positions[8] === CROSS
    )
      return CROSS;

    //------------- End Of 2nd Condition ----------
    if (
      positions[0] === TICK &&
      positions[4] === TICK &&
      positions[8] === TICK
    )
      return TICK;
    if (
      positions[2] === TICK &&
      positions[4] === TICK &&
      positions[6] === TICK
    )
      return TICK;

    if (
      positions[0] === CROSS &&
      positions[4] === CROSS &&
      positions[8] === CROSS
    )
      return CROSS;
    if (
      positions[2] === CROSS &&
      positions[4] === CROSS &&
      positions[6] === CROSS
    )
      return CROSS;

    //------------- End Of 3rd Condition ----------

    if (positions.every((position) => position != EMPTY))
      return EMPTY;

    return null;
  };

  const playerTurn = (position: any) => {
    const updatedPosition = [...positions];
    updatedPosition[position] = player;

    setPlayer((prevPlayer) => (prevPlayer === TICK ? CROSS : TICK));
    setPositions(updatedPosition);
  }

  const resetGame = () => {
    setPositions([
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
    ]);
    setWinner(null);
    setPlayer(TICK);
  };

  useEffect(() => {
    setWinner(detectWinner());
  });


  return (
    <>
      <div className="App">
        <h1 className="heading">
          Tick Tack Toe Game
        </h1>
        {winner ? (
          <ResultScreen resetGame={resetGame} winner={winner} />
        ) : (
          <div className="game__area">
            <Square position={0} value={positions[0]} playerTurn={playerTurn} />
            <Square position={1} value={positions[1]} playerTurn={playerTurn} />
            <Square position={2} value={positions[2]} playerTurn={playerTurn} />
            <Square position={3} value={positions[3]} playerTurn={playerTurn} />
            <Square position={4} value={positions[4]} playerTurn={playerTurn} />
            <Square position={5} value={positions[5]} playerTurn={playerTurn} />
            <Square position={6} value={positions[6]} playerTurn={playerTurn} />
            <Square position={7} value={positions[7]} playerTurn={playerTurn} />
            <Square position={8} value={positions[8]} playerTurn={playerTurn} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
