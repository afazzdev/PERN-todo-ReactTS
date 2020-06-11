import React, { Fragment, useState } from 'react';
import { onSubmitForm } from '../services';
import { ITodos } from '../App';

const InputTodo = ({ todos, setTodos }: ITodos) => {
  const [description, setDescription] = useState('');

  return (
    <Fragment>
      <h1 className='text-center mt-5'>Pern ToDo List</h1>
      <form
        className='d-flex mt-5'
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm({ description }, (res) => {
            setDescription('' as string);
            setTodos([...todos, res]);
          });
        }}
      >
        <input
          type='text'
          className='form-control'
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value as string)}
        />
        <button className='btn btn-success' type='submit'>
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
