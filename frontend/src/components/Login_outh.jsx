import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const LoginOauth = () => {
  const { loggedIn, user } = useSelector((state) => state);
  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/google");
      window.location.href = response.data;
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      {loggedIn ? null : (
        <button onClick={handleLogin} className="login_google">
          Login with Google
        </button>
      )}
    </div>
  );
};

export default LoginOauth;
