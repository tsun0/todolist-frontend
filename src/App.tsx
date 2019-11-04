import React, {FC, useState, useEffect} from 'react';
import {List, Item, Header} from 'semantic-ui-react';
import './App.css';

const App: FC = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    // TODO BEからリストを取得する処理
    return;
  }, [])

  return (
    <div className="container">
      <Header>TODOリスト</Header>
      <Item>
        <List.Item as="li">
          なし
        </List.Item>
      </Item>
    </div>
  );
}

export default App;
