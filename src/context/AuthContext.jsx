import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [adminUsers, setAdminUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedIsLogged = localStorage.getItem('isLogged');
    if (storedIsLogged) {
      setIsLogged(JSON.parse(storedIsLogged));
    }
    fetch('http://localhost:4000/admin_users')
      .then((res) => res.json())
      .then((data) => setAdminUsers(data));
  }, []);

  const onLoginHandleClick = (inputUsername, inputPassword) => {
    const matchedUser = adminUsers.find(
      ({ username, password }) =>
        username === inputUsername && password === inputPassword
    );

    if (matchedUser) {
      setIsLogged(true);
      localStorage.setItem('isLogged', JSON.stringify(true));
      navigate('/');
      return true; // Login successful
    }

    return false; // Login failed
  };

  const onLogOutHandleClick = () => {
    setIsLogged(false);
    localStorage.removeItem('isLogged');
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{ isLogged, onLoginHandleClick, onLogOutHandleClick }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
