import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setgameOver, setmarks, setplayer } from "../../service/gameSlice";
import Block from "../block/Block";
import "./board.css";



const Board = () => {
  //   const [marks, setMarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //   const [player, setPlayer] = useState(1);
  const [message, setmessage] = useState("");

  const dispatch = useDispatch();

  const marks = useSelector((state) => state.game.marks);
 // console.log(marks);
  const player = useSelector((state) => state.game.player);
  const gameOver =useSelector((state)=>state.game.gameOver)

  const changemark = (i) => {
    const markArr = [...marks];

    if (markArr[i] === 0 && !gameOver) {
      markArr[i] = player;
      dispatch(setmarks(markArr));
      dispatch(setplayer(player === 1 ? 2 : 1));
    }
  };

  useEffect(() => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let c of combinations) {
      if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
        dispatch(setgameOver(true))
        setmessage("player one win")
        setTimeout(() => {
          dispatch(setmarks([0, 0, 0, 0, 0, 0, 0, 0, 0]))
          dispatch(setplayer(1))
          setmessage("");
          window.location.reload(true)
        }, 3000);
        
      }

      if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
        dispatch(setgameOver(true))
        setmessage("player two win")
        setTimeout(() => {
          dispatch(setmarks([0, 0, 0, 0, 0, 0, 0, 0, 0]))
          dispatch(setplayer(1))
          setmessage("");
          window.location.reload(true)
        }, 3000);
        
      }
    }
  }, [marks]);
  return (
    <>
    <h2 style={{color:'green', fontSize:"20px"}}>{message}</h2>
    <div className="board">
      <div>
        <Block mark={marks[0]} position={0} changemark={changemark} />
        <Block mark={marks[1]} position={1} changemark={changemark} />
        <Block mark={marks[2]} position={2} changemark={changemark} />
      </div>
      <div>
        <Block mark={marks[3]} position={3} changemark={changemark} />
        <Block mark={marks[4]} position={4} changemark={changemark} />
        <Block mark={marks[5]} position={5} changemark={changemark} />
      </div>
      <div>
        <Block mark={marks[6]} position={6} changemark={changemark} />
        <Block mark={marks[7]} position={7} changemark={changemark} />
        <Block mark={marks[8]} position={8} changemark={changemark} />
      </div>
    </div>
    </>
  );
};

export default Board;
