import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <header>
      </header>
        <NavBar/>
        <h1>My Articles</h1>
        <ArticleList urlParams="topstories"/>
    </div>
  );
}

export default App;
