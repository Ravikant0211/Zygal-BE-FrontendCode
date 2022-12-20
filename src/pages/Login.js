import React, { useState } from "react";

const Login = (props) => {
  const [login, setLogin] = useState("");
  const [passWord, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!login || !passWord) return;

    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_id: login,
        passWord,
      }),
    });
    props.setHomeState();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <h2>Login Page</h2>
      <div>
        <label htmlFor="login">Login</label>
        <br />
        <input
          onChange={(e) => setLogin(e.target.value)}
          type="email"
          id="login"
        />
      </div>
      <br />
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
        />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
