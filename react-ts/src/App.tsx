import React from "react";
import Posts from "./component/Posts";
import "./App.css";

const App = () => {
  return (
    <>
      <form className="form">
        <label className="form__author">Title</label>
        <input className="author" type="text" />
        <label className="form__discription">Description</label>
        <textarea className="description" maxLength={250}></textarea>
        <button className="form__btn">Submit</button>
      </form>
      <Posts />
    </>
  );
};

export default App;
