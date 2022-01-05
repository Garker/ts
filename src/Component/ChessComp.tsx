import React from 'react';
import { ChessType } from '../type/enmus';

import './ChessComp.css'

type Chess = {
    type:ChessType,
    onClick?:() => void
}

export default function Chess({type,onClick}:Chess){

    let chess = null

    if(type === ChessType.red){
        chess = <div className="chess-item red"></div>
    }else if(type === ChessType.black){
        chess = <div className="chess-item black"></div>
    }

    return (
        <div className="chess" onClick={() => {
            if(onClick && type === ChessType.none) onClick()
        }}>
            {chess}
        </div>
    )
}