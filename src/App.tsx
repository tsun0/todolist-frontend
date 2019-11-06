import React, {FC, useState, useEffect} from 'react';
import {List, Item, Header} from 'semantic-ui-react';
import './App.css';

const App: FC = () => {
  // var obj:{id:number, task:string};
  const [list, setList] = useState();

  const getTodoList = () => {
    const tmp = {
      id: 1,
      task: "サンプル",
    };
    const tmp2 = {
      id: 2,
      task: "サンプル2",
    };
    // var array:{id:number, task:string}[] = [tmp, tmp2];
    return tmp2.id;
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
        <List.Item as="li">
          {getTodoList()}
        </List.Item>
      </Item>
    </div>
  );
}

export default App;
