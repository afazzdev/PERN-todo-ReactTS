export interface ITodo {
  description: string;
  todo_id: string;
}

const onSubmitForm = async (body: object, cb: (res: object) => void) => {
  try {
    const response = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((json) => json.json());

    console.log(response);
    cb(response.data);
  } catch (err) {
    console.log(err);
  }
};

const onDelete = async (id: string, cb: (id: string) => void) => {
  try {
    const res = await fetch('http://localhost:5000/todos/' + id, {
      method: 'DELETE',
    }).then((json) => json.json());

    cb(id);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

const getTodos = async (cb: (data: ITodo[]) => void) => {
  try {
    const res = await fetch('http://localhost:5000/todos').then((json) =>
      json.json(),
    );

    cb(res.data as ITodo[]);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

const updateDesc = async (
  id: string,
  body: object,
  cb: Function = () => {},
) => {
  try {
    const res = await fetch('http://localhost:5000/todos/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((json) => json.json());

    cb(res);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export { onSubmitForm, onDelete, getTodos, updateDesc };
