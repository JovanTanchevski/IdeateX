import './App.css';
import { AuthContext } from './context/AuthContext';
import React, { useContext } from 'react';
import Header from './components/Header/Header';
function App() {
  const { isLogged } = useContext(AuthContext);
  return (
    <>
      <Header />
    </>
  );
}

export default App;
