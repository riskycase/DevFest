import React from 'react';
import logo from './logo.svg';
import './App.css';
import Team from './sections/Team/Team';
import Button from './components/Button/Button';
function App() {
   return (
      <div className="App">
         <Team></Team>
         <Button color="primary" text="Web Development"></Button>
         <Button color="secondary" text="Web Development"></Button>
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
         </header>
      </div>
   );
}

export default App;
