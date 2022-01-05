import React from 'react';
import { ChessType } from '../type/enmus';
import Chess from './ChessComp';

import './BoardComp.css'

interface Iprops{
    chesses:ChessType[]
    isGameOver?:boolean
    onClick?:(index:number) =>void
}

const Board:React.FC<Iprops>  = function(props:Iprops){
    const isGameOver  = props.isGameOver!
    const list = props.chesses.map((type,i) => <Chess type={type} key={i} 
        onClick = {() => {
            if(props.onClick && !isGameOver) props.onClick(i)
        }}
    />)
    return (
        <div className="board">
            {list}
        </div>
    )
}
Board.defaultProps ={
    isGameOver:false
}

export default Board