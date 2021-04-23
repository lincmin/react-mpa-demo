import React, { useEffect } from "react";
import axios from 'axios';
import logo from '../logo.svg';
import './App.css';
import { Button } from 'antd';

function App() {
  useEffect(() => {
    console.log("useEffect");
    axios.get('/v1/goods/list?name=&sn=&limit=1&offset=0')
                .then(function(response) {
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Button type="primary">Button</Button>
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
