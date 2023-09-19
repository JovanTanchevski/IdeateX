import React, { useContext } from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SingleEventPage from './Pages/Single-Event-Page/SingleEventPage';
import Error404Page from './components/404Page/Error404Page';
import Footer from './components/Footer/Footer';
import LoginPage from './components/LoginPage/LoginPage';
import { AuthContext } from './context/AuthContext';
import AdminHomePage from './components/Admin-Panel/Pages/AdminHomePage';
import DashboardPage from './components/Admin-Panel/Pages/Dashboard.Page';

function App() {
  const { isLogged } = useContext(AuthContext);
  return (
    <React.Fragment>
      {!isLogged && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:eventID" element={<SingleEventPage />} />
        <Route path="/about" element={<p>About</p>} />
        {!isLogged && <Route path="/login" element={<LoginPage />} />}
        {isLogged && (
          <Route path="/admin-panel" element={<AdminHomePage />}>
            <Route path="notifications" element={<p>Notifications Panel</p>} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="create-event" element={<p>Create Event Panel</p>} />
            <Route path="analysis" element={<p>Analysis Panel</p>} />
            <Route path="profile" element={<p>profile Panel</p>} />
            <Route path="customization" element={<p>customization Panel</p>} />
          </Route>
        )}

        <Route path="*" element={<Error404Page />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
export default App;
