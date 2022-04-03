import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Movies from "./Pages/Movies";
import Home from "./Pages/Home";
import Shows from "./Pages/Shows";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    display: flex;
    width: 100%;
    height:15%; 
    font-size: 35px;
    text-align: center;
    justify-content: space-evenly;
    background-color: black;
    color: white;
  }
  h1 {
    width: 100%;
    margin-top: 2%;
    font-size: 45px;
    text-align: center;
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/series">Series</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Shows />} />
          </Routes>
        </Router>
      </>
    );
  }
}
