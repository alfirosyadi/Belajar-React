import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Button from './components/Button';



function App() {

  const [count, setCount] = useState(() => {
    console.log("useState run")
    return 0
  })

  useEffect(
    () => {
      if (count === 4){
        console.log('useEffect run')
        return alert('angka sama dengan 4');
      }
    },
    [count]
  )

  function decrementCount() {
    setCount(count => count - 1)
  }
  function incrementCount() {
    setCount(count => count + 1)
  }

  const navText = "Skills";

  const buttonClick = () => {
    return alert('button dipencet');
  }

  return (
    <div className="App">
      <Navbar test={navText}/>
      <Introduction nama="Alfi"/>
      <Button buttonClick={buttonClick}/>
      <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default App;
