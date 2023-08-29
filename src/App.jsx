import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/ErrorPage';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:eventID" element={<p>THIS IS SINGLE PAGE</p>} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/login" element={<p>Login Page</p>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
