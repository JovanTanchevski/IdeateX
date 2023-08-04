import './App.css';
import { AuthContext } from './context/AuthContext';
import React, { useContext } from 'react';
function App() {
  const { isLogged } = useContext(AuthContext);
  console.log(isLogged);
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-3xl font-bold underline">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
