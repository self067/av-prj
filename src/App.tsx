import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <Menu />
        {/* <h1>Hello</h1> */}
      </div>

    </>
  );
}

export default App;
