import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./Redux/action";

function App() {
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
    <div className="App">
      {/* {loggedIn ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please login</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )} */}
      {loggedIn ? (
        <>
          <h1>Welcome, {user.username}</h1>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            value={userData.username}
            onChange={handleLogin}
            // onChange={(e) => setUserData(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={userData.password}
            onChange={handleLogin}
            // onChange={(e) => setUserData(e.target.value)}
          />
          <input type="submit" value="Login" onClick={loginUser} />
        </form>
      )}
    </div>
  );
}

export default App;
