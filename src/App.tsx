import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
// box-sizing: content-box | border-box
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  outline: none;
}

body {
  margin: 0;
  background-color: #f0f0f0;
  font-family: Roboto, sans-serif;
  color: black;
  font-size: 20px;
    
}

img {
  max-width: 100%;
  height:auto;
}

*::before,
*::after {
  box-sizing: inherit;
}

a { 
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1, h2, h3 {
  font-family: Pacifico;
  padding: 0;
  margin: 0;
}

p {
    font-family: Pacifico;
    padding: 0;
    margin: 0;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        {/* <h1>Hello</h1> */}
      </div>

    </>
  );
}

export default App;
