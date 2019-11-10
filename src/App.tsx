import React, {FC} from 'react';
import {Item, Header, List} from 'semantic-ui-react';
import './App.css';

interface Todo {
  id: number;
  name: string;
}

const tmp:Todo[] = [
  {
    id: 1,
    name: "coding",
  },
  {
    id: 2,
    name: "test",
  }
]


const App: FC = () => {

  return (
    <div className="container">
      <Header>TODOリスト</Header>
      <Item>
        {/* TODO tmp roop */}
        {tmp.map(code => (
          <List.Item as="li">
            {code.id} {code.name}
          </List.Item>
        ))}
      </Item>
    </div>
  );
}

export default App;
