import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const storedIsLogged = localStorage.getItem('isLogged');
    if (storedIsLogged) {
      setIsLogged(JSON.parse(storedIsLogged));
    }
  }, []);

  const onLoginHandleClick = (username, password) => {
    // In a real app, you would perform authentication here
    // For this example, let's just assume a simple check
    if (username === 'user' && password === 'password') {
      setIsLogged(true);
      localStorage.setItem('isLogged', JSON.stringify(true));
    }
  };

  const onLogOutHandleClick = () => {
    setIsLogged(false);
    localStorage.removeItem('isLogged');
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
