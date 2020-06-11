import React from 'react';
import EditTodo from './editTodo';
import { onDelete } from '../services';
import { ITodos } from '../App';

const ListTodos = ({ todos, setTodos }: ITodos) => {
  return (
    <div>
      <table className='table mt-5 text-center'>
        <thead>
          <tr>
            <th>Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((el, index) => (
            <tr key={el.todo_id}>
              <td>{el.description}</td>
              <td>
                <EditTodo
                  index={index}
                  todo={el}
                  todos={todos}
                  setTodos={setTodos}
                />
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() =>
                    onDelete(el.todo_id, (id: string) => {
                      setTodos(todos.filter((el) => el.todo_id !== id));
                    })
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodos;
