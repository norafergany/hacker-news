import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import React from "react";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <header>
      </header>
        <NavBar/>
        <ArticleList/>
    </div>
  );
}

export default App;
