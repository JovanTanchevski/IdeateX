import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Error404Page from './components/404Page/Error404Page';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:eventID" element={<p>THIS IS SINGLE PAGE</p>} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/login" element={<p>Login Page</p>} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
