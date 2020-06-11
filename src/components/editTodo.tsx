import React, { Fragment, useState } from 'react';
import { updateDesc, ITodo } from '../services';
import { ITodos } from '../App';

const EditTodo = ({
  index,
  todo,
  todos,
  setTodos,
}: { index: number; todo: ITodo } & ITodos) => {
  const [description, setDescription] = useState(todo.description);

  return (
    <Fragment>
      <button
        type='button'
        className='btn btn-warning'
        data-toggle='modal'
        data-target={`#perntodo-modal-${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        id={`perntodo-modal-${todo.todo_id}`}
        className='modal fade'
        role='dialog'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Edit description</h4>
              <button type='button' className='btn close' data-dismiss='modal'>
                &times;
              </button>
            </div>
            <div className='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) =>
                  setDescription(e.currentTarget.value as string)
                }
              />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-warning'
                data-dismiss='modal'
                onClick={() =>
                  updateDesc(todo.todo_id, { description }, () => {
                    setTodos([
                      ...todos.slice(0, index),
                      { todo_id: todo.todo_id, description },
                      ...todos.slice(index + 1),
                    ]);
                  })
                }
              >
                Edit
              </button>
              <button
                type='button'
                className='btn btn-danger'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
