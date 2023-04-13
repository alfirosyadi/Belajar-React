import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Button from './components/Button';

function App() {
  const navText = "Skills";

  return (
    <div className="App">
      <Navbar test={navText}/>
      <Introduction nama="Alfi"/>
      <Button/>
    </div>
  );
}

export default App;
