import React, {FC, useState, useEffect} from 'react';
import {List, Item, Header} from 'semantic-ui-react';
import './App.css';

const App: FC = () => {
  // var obj:{id:number, task:string};
  const [list, setList] = useState();

  const getTodoList = () => {
    const tmp1 = {
      id: 1,
      task: "サンプル",
      done: false
    };
    const tmp2 = {
      id: 2,
      task: "サンプル2",
      done: false,
    };
    var array:{id:number, task:string, done:boolean}[] = [];
    array.push(tmp1, tmp2)
    return array;
  }
  // useEffect(() => {
  //   // TODO BEからリストを取得する処理
  //   const tmp = {
  //     id: 1,
  //     task: "サンプル",
  //   };
  //   const tmp2 = {
  //     id: 2,
  //     task: "サンプル2",
  //   };
  //   var array:{id:number, task:string}[] = [tmp, tmp2];
  //   setList(array)
  // }, [])

  return (
    <div className="container">
      <Header>TODOリスト</Header>
      <Item>
        {getTodoList()}
          
      </Item>
    </div>
  );
}

export default App;
