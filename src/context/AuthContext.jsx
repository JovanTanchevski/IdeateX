import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const storedIsLogged = localStorage.getItem('isLogged');
    if (storedIsLogged) {
      setIsLogged(JSON.parse(storedIsLogged));
    }
  }, []);

  const onLoginHandleClick = (username, password) => {
    // In a real app, you would perform authentication here
    // For this example, let's just assume a simple check
    if (username === 'admin@ideate.com' && password === 'ideateX123') {
      setIsLogged(true);
      localStorage.setItem('isLogged', JSON.stringify(true));
      console.log(username, password);
      navigate('/');
    }
  };

  const onLogOutHandleClick = () => {
    setIsLogged(false);
    localStorage.removeItem('isLogged');
    navigate('/');
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
