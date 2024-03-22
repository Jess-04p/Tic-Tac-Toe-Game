import React, { useState } from "react";
import Square from "./Square";

const Board = () =>{
    
    const[state,setState]=useState(Array(9).fill(null));
    const[isXTurn,setIsTurn]=useState(true);

    const Winner=()=>{
        const winLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for(let i of winLogic){
            const [a,b,c]=i;
            if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        }
        return false;
    };

    const isWinner=Winner();

    const isDraw=state.every((Square)=>Square!==null);

    const handleClick=(index)=>{
        if(state[index]==null){
        const copyState=[...state];
        copyState[index]=isXTurn?'X':'0';
        setState(copyState);
        setIsTurn(!isXTurn);
        }
    };

    const handleReset=()=>{
        setState(Array(9).fill(null));
    }

    return(
        <div className="board-cont" style={{ width: '50%', margin: '0 auto' }}>
        {isWinner?(
            <><h1 style={{fontSize:'30px'}}>Player {isWinner} won the game</h1>
            <button style={{ width: '180px', height: '50px',borderRadius:'10px'}} onClick={handleReset}>Play Again</button>
            </>
        ) : isDraw?(
            <>
                <h1 style={{fontSize:'30px'}}>No one won the game</h1>
                <button style={{ width: '180px', height: '50px',borderRadius:'10px'}} onClick={handleReset}>Play Again</button>
            </>
            ):(
          <>
          <h3>Player {isXTurn?'X':'0'} Turn :</h3>
            <div className="board-row">
            <Square onClick={()=>handleClick(0)} value={state[0]}/>
            <Square onClick={()=>handleClick(1)} value={state[1]}/>
            <Square onClick={()=>handleClick(2)} value={state[2]}/>
            </div>
            <div className="board-row">
            <Square onClick={()=>handleClick(3)} value={state[3]}/>
            <Square onClick={()=>handleClick(4)} value={state[4]}/>
            <Square onClick={()=>handleClick(5)} value={state[5]}/>
            </div>
            <div className="board-row">
            <Square onClick={()=>handleClick(6)} value={state[6]}/>
            <Square onClick={()=>handleClick(7)} value={state[7]}/>
            <Square onClick={()=>handleClick(8)} value={state[8]}/>
            </div><br/>
            <div style={{ textAlign: 'center' }}>
        <button style={{ width: '180px', height: '50px' ,borderRadius:'10px',marginLeft:'2%'}} onClick={handleReset} >Restart the game</button></div>
          </>
        )}
        
        </div>
    );
};

export default Board;