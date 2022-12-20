import React, { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [homeState, setHomeState] = useState(false);
  const [loginState, setLoginState] = useState(true);

  const homeStateHandler = () => {
    setHomeState(true);
    setLoginState(false);
  };

  const loginStateHandler = () => {
    setLoginState(true);
    setHomeState(false);
  };

  return (
    <div className="App">
      {loginState && <Login setHomeState={homeStateHandler} />}
      {homeState && <Home setLoginState={loginStateHandler} />}
    </div>
  );
}

export default App;
