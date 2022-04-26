import React from 'react'
import logo from './logo.svg';
import './App.css';
import MyH from './H1';


function App() {
  return (
    <div className="App">
      <MyH />
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    let c = count+1;
    setCount(c);
  }

  return (
    <>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export {App, Counter};

