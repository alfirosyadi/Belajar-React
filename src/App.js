import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction nama="Alfi"/>
    </div>
  );
}

export default App;
