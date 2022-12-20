import React, { useState } from "react";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div>
        <label htmlFor="message">Submit text message</label>
        <br />
        <input type="text" id="message" />
        <br />
        <br />
        <button>Submit(button 1)</button>
      </div>
      <br />
      <div>
        <label htmlFor="searchMessage">Search text message</label>
        <br />
        <input type="text" id="searchMessage" />
        <br />
        <br />
        <button>Search(button 2)</button>
      </div>
      <div>
        <p>Show searched text messages here</p>
        <div id="text-field">No message found</div>
      </div>
      <br />
      <button>Clear All(button 3)</button>
      <br />
      <br />
      <button>Logout(button 4)</button>
    </div>
  );
};

export default Home;
