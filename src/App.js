import React from "react";
import './App.css';
import Header from "./components/Header";
import Movie from "./components/Movie";

function App() {
  return (
    <>
      <Header text="Movie Search App" />
      <Movie />
    </>
  );
}

export default App;
