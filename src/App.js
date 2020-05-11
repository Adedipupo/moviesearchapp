import React from "react";
import './App.css';
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Header text="Movie Search App" />
      <Search />
      <Movie />
    </>
  );
}

export default App;
