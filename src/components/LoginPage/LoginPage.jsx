import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
  const { onLoginHandleClick } = useContext(AuthContext);
  const [showUserModal, setShowUserModal] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [userAuth, setUserAuth] = useState({
    usernameValidation: true,
    passwordValidation: true,
  });
  const onUsernameChange = (event) => {
    setUser({
      ...user,
      username: event.currentTarget.value,
    });
  };
  const onPasswordChange = (event) => {
    setUser({
      ...user,
      password: event.currentTarget.value,
    });
  };
  const onFormSubmit = (event) => {
    event.preventDefault();

    setUserAuth({
      usernameValidation: true,
      passwordValidation: true,
    });

    if (user.password.length <= 8) {
      setUserAuth({
        ...userAuth,
        passwordValidation: false,
      });
    }

    if (user.username.length <= 7) {
      setUserAuth({
        ...userAuth,
        usernameValidation: false,
      });
    }

    if (userAuth.usernameValidation && userAuth.passwordValidation) {
      onLoginHandleClick(user.username, user.password);
    }
  };

  return (
    <div className="w-full w-1/2 py-12 mx-auto">
      <form className="bg-white shadow rounded px-8 py-12 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              userAuth.usernameValidation ? '' : 'border-red-500'
            }`}
            id="username"
            type="text"
            placeholder="Enter username here"
            value={user.username}
            onChange={onUsernameChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              userAuth.passwordValidation ? '' : 'border-red-500'
            }`}
            id="password"
            type="password"
            placeholder="Enter password here"
            onChange={onPasswordChange}
            value={user.password}
          />
          {!userAuth.passwordValidation && (
            <small className="text-red-500 text-xs italic">
              Please choose a password.
            </small>
          )}
        </div>

        <div className="flex justify-end">
          <button
            className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800"
            onClick={(e) => {
              e.preventDefault();
              setShowUserModal(!showUserModal);
            }}
          >
            {showUserModal ? 'Close' : 'Forgot Password ?'}
          </button>
        </div>
        {showUserModal && (
          <div>
            <p className="text-xl">
              Username : <span className="italic">admin@ideate.com</span>
            </p>
            <p className="text-xl">
              Password : <span className="italic">ideateX123</span>
            </p>
          </div>
        )}
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
