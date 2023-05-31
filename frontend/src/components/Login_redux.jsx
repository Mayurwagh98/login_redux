import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../Redux/action";
import "./Login_redux.css";
import LoginOauth from "./Login_outh";
import "./Login_redux.css";

const Login_redux = () => {
  let [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const { loggedIn, user } = useSelector((state) => state);

  const dispatch = useDispatch();

  let handleLogin = (e) => {
    let { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  let loginUser = () => {
    dispatch(login(userData));
    setUserData({ username: "", password: "" });
  };

  useEffect(() => {
    // Log the user out on component unmount
    return () => {
      dispatch(logout());
    };
  }, [dispatch]);

  return (
    <div>
      {loggedIn ? (
        <>
          <h1 className="welcome_heading">Welcome, {user.username}</h1>
          <button onClick={() => dispatch(logout())} className="logout_btn">Logout</button>
        </>
      ) : (
        <form onSubmit={(e) => e.preventDefault()} className="login_form">
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            value={userData.username}
            onChange={handleLogin}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={userData.password}
            onChange={handleLogin}
          />
          <button onClick={loginUser} className="login_btn">
            Log In
          </button>

          <LoginOauth />
        </form>
      )}
    </div>
  );
};

export default Login_redux;
