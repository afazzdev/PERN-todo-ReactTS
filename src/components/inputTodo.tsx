import React, { Fragment, useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }).then((json) => json.json());

      console.log(response);
      setDescription('' as string);
      window.location.href = '/';
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <h1 className='text-center mt-5'>Pern ToDo List</h1>
      <form className='d-flex mt-5' onSubmit={onSubmitForm}>
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
