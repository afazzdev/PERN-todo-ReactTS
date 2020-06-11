import React, { useEffect, useState } from 'react';

type IData = {
  description: string;
  todo_id: string;
};

const ListTodos = () => {
  const [data, setData] = useState<IData[]>([]);

  const getTodos = async () => {
    try {
      const res = await fetch('http://localhost:5000/todos').then((json) =>
        json.json(),
      );

      setData(res.data as IData[]);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

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
          {data?.map((el) => (
            <tr key={el.todo_id}>
              <td>{el.description}</td>
              <td>
                <button className='btn'>Edit</button>
              </td>
              <td>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>{' '}
    </div>
  );
};

export default ListTodos;
