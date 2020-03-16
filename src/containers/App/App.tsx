import React from 'react';

import * as cfg from "wmgf/config"
import { TextEditor } from "wmgf/containers/TextEditor/TextEditor"
import './App.css'


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-logo-container">
          <img className="app-header-logo" src="/logo.png" alt="WMGF"/>
        </div>
      </header>
      <div className="app-content">
        <TextEditor />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <footer className="app-footer">
        <div className="app-footer-inner">
          <span>Send prompt ideas and feedback to <a className="a" href="mailto:wemustgoforwardapp@gmail.com">wemustgoforwardapp@gmail.com</a>.</span>
          <span>{cfg.version}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
