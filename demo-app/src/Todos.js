import React from "react";

function Todo(props) {
  let text = props.todo.text;
  if (props.todo.isDone)
    text = <s style={{color: "red"}}>{text}</s>;
  
  return (<li id={props.index} key={props.index} onClick={() => {props.markTodo(props.index)}}>{text}</li>);
}

function Todos() {
  let [todos, setTodos] = React.useState([]);

  const addTodo = () => {
    let newTodos = [...todos, {text: document.getElementById('todo_box').value, isDone: false}];
    setTodos(newTodos);
    //setTodos((t) => [...t, { text: document.getElementById('todo_box').value, isDone: false } ]);
  }

  const markTodo = index => {
    let newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  }
  
  return (
    <>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo, index) => 
          <Todo todo={todo} index={index} markTodo={markTodo} />
        )}
      </ul>
      <label>To do:</label>
      <input type="text" id="todo_box" required></input>
      <button onClick={addTodo} >Add Todo</button>
    </>
  );
}

export default Todos;