import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route,Link,useNavigate} from "react-router-dom";
 const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
const handleLogin = () => {
    localStorage.setItem("log",'1');
    console.log(localStorage.getItem('log'))
    navigate("/")  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" id="un" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
