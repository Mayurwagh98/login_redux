import React from "react";
import axios from "axios"

const LoginOauth = () => {
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
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default LoginOauth;
