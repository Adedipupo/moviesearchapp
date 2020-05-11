import React from "react";
import './App.css';
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header text="Movie Search App" />
      <Search search={search}/>
      <p className="App-intro">Sharing few of our favorite movies</p>
      <Movie />
    </div>
  );
}

export default App;
