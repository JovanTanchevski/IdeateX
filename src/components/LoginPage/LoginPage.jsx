import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
  const { onLoginHandleClick } = useContext(AuthContext);
  const [user, setUser] = useState({ username: '', password: '' });
  const [validationErrors, setValidationErrors] = useState({});

  const onFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = user;

    if (
      !username ||
      username.length <= 7 ||
      !password ||
      password.length <= 8
    ) {
      setValidationErrors({
        username: username.length <= 7,
        password: password.length <= 8,
      });
      return;
    }

    // Clear validation errors
    setValidationErrors({});

    // Perform login
    onLoginHandleClick(username, password);
  };

  return (
    <div className="w-full w-1/2 py-12 mx-auto">
      <form className="bg-white shadow rounded px-8 py-12 mb-4 sm:max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              validationErrors.username ? 'border-red-500' : ''
            }`}
            id="username"
            type="text"
            placeholder="Enter username here"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          {validationErrors.username && (
            <small className="text-red-500 text-xs italic">
              Please enter a valid username.
            </small>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              validationErrors.password ? 'border-red-500' : ''
            }`}
            id="password"
            type="password"
            placeholder="Enter password here"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          {validationErrors.password && (
            <small className="text-red-500 text-xs italic">
              Please choose a valid password.
            </small>
          )}
        </div>

        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 w-full my-5 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onFormSubmit}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
