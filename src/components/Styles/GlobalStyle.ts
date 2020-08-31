import { createGlobalStyle } from 'styled-components';

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
button {
  cursor: pointer;
}
input, button {
  font: inherit;
}

input[type='number'],
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button
 {
  -moz-appearance: none; /*textfield;*/
  -webkit-appearance: none;
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

export default GlobalStyle;
