import logo from './logo.svg';
import './App.css';
import BodyLeft from './layouts/BodyLeft.jsx'
import BodyRight from './layouts/BodyRight';
import { useEffect, useState } from 'react';
import moment from 'moment';


function App() {
  const [listTodo, setListTodo] = useState([])

  const addTodo = (valueItem) => {
    const newTodo = [...listTodo, valueItem];
    setListTodo(newTodo);
  };

  // xóa
  const deleteTodo = (indexItem) => {
    // const arrTodo = listTodo;
    const arrTodo = [...listTodo];
    arrTodo.splice(indexItem, 1);
    setListTodo(arrTodo);
    localStorage.setItem("todos", JSON.stringify(arrTodo));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const newTodos = todos.map((todo, index) => {
      const isChecked = moment(todo.status).isSame(moment(), 'day');
      if (isChecked) {
        alert("ban có 1 lời nhắc: " + " " + todo.content)
        return { ...todo, background: '#ff6b6b' }
      }
      return todo

    })
    setListTodo(newTodos);

  }, [])

  return (
    <div className="App">
      <h3>Nhắc nhở ngày quan trọng</h3>
      {/* <div className="body"> */}
      <BodyLeft addTodo={addTodo} listTodo={listTodo} />
      <BodyRight listTodo={listTodo} deleteTodo={deleteTodo} />
      {/* </div> */}

    </div>
  );
}

export default App;
