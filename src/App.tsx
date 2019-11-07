import React, {FC} from 'react';
import {Item, Header} from 'semantic-ui-react';
import './App.css';

interface Todo {
  id: number;
  name: string;
  remarks?: string;
}


interface TodoList { 
  tasks: Todo[]; 
}

const App: FC = () => {
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


  return (
    <div className="container">
      <Header>TODOリスト</Header>
      <Item>

        {tmp2.id}
          
      </Item>
    </div>
  );
}

export default App;
