import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, Counter} from './App';
import reportWebVitals from './reportWebVitals';
import Todos from './Todos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const count = ReactDOM.createRoot(document.getElementById('count'));
count.render(<Counter />);
const todo = ReactDOM.createRoot(document.getElementById('todos'));
todo.render(<Todos />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
