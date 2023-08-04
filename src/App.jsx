import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/login" element={<p>Login Page</p>} />
        <Route
          path="*"
          element={<div>{location.pathname} 404 - Not Found</div>}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
