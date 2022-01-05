import React from 'react';
import Board from './Component/BoardComp';
import { ChessType } from './type/enmus';

const chesses:ChessType[] = [
  ChessType.none,
  ChessType.none,
  ChessType.none,
  ChessType.red,
  ChessType.red,
  ChessType.red,
  ChessType.black,
  ChessType.black,
  ChessType.black,
]
export default class App extends React.Component{

  render() {
    return (
      <div>
       <Board chesses={chesses} onClick = {i => {
         console.log(i)
       }}/>
      </div>
    )
  }
}
