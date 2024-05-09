import { useState } from "react";

import './StateTodo.css';

let maxId = 0;

const StateTodo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [desc, setDesc] = useState(true);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleAdd = (e) => {
    setTodos([
      ...todos,
      {
        id: ++maxId,
        input,
        created: new Date(),
        isDone: false
      }
    ]);
    setInput("");
  };
  const handleRemove = (e) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== Number(e.target.dataset.id)
    }));
  };
  const hadleDone = (e) => {
    setTodos(todos.map((todo) => {
      if(todo.id === Number(e.target.dataset.id)){
        return {
          ...todo,
          isDone: true
        };
      } else {
        return todo;
      }
    }));
  };
  const handleSort = (e) => {
    const sorted = [...todos];
    sorted.sort((m, n) => {
      if (desc) {
        return n.created.getTime() - m.created.getTime();
      } else {
        return m.created.getTime() - n.created.getTime();
      }
    });
    setDesc(d => !d);
    setTodos(sorted);
  };

  return (
    <>
      <label htmlFor="title">
        やること：
        <input
          type="text"
          name="title"
          id="title"
          value={input}
          onChange={handleChange}
        />
        <button type="button" onClick={handleAdd}>Add</button>
        <button type="button" onClick={handleSort}>並び替え( {desc ? '↑' : '↓'} )</button>
      </label>
      <hr />
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className={todo.isDone ? 'done' : ''} >
            {todo.input}
            <button 
            type="button" 
            onClick={hadleDone} 
            data-id={todo.id}
            >済</button>
            <button type="button" onClick={handleRemove} data-id={todo.id} >削除</button>
          </li>
          )
        })}
      </ul>
    </>
  );
};

export default StateTodo;