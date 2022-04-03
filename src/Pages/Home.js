import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

`;

class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Casa do VHS</h1>
        <p>Consulte Filmes e Series Lançados</p>
        <img
          className="center"
          src="https://sc04.alicdn.com/kf/H98d8fee658d744c58cf2848568e7f24be.png"
        />
      </>
    );
  }
}

export default Home;
