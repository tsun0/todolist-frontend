import React, {FC} from 'react';
import {Item, Header, List} from 'semantic-ui-react';
import './App.css';

interface Todo {
  id: number;
  name: string;
  remarks?: string;
}

interface TodoList { 
  tasks: Todo[]; 
}

const tmp: TodoList = {
  tasks: [
    {
      id: 1,
      name: "coding",
      remarks: "react hooks",
    }
  ]

};

const tmp2: Todo = {
  id: 1,
  name: "coding",
  remarks: "react hooks",
};

const codes = Object.keys(tmp2);

const App: FC = () => {

  return (
    <div className="container">
      <Header>TODOリスト</Header>
      <Item>
        {codes.map(code => (
          <List.Item as="li" key={code}>
            {code}
          </List.Item>
        ))}
      </Item>
    </div>
  );
}

export default App;
