import React, { Fragment, useEffect, useState } from 'react';
import InputTodo from './components/inputTodo';
import ListTodos from './components/listTodos';
import { getTodos, ITodo } from './services';

export interface ITodos {
  todos: ITodo[];
  setTodos: Function;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    getTodos((todos: ITodo[]) => {
      setTodos(todos as ITodo[]);
    });
  }, []);

  return (
    <Fragment>
      <div className='container'>
        <InputTodo todos={todos} setTodos={setTodos} />
        <ListTodos todos={todos} setTodos={setTodos} />
      </div>
    </Fragment>
  );
}

export default App;
