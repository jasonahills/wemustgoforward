import React from 'react';

import * as cfg from "wmgf/config"
import { TextEditor } from "wmgf/containers/TextEditor/component"
import './style.css'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-logo-container">
          <img className="app-header-logo" src="/logo.png" alt="WMGF" />
        </div>
      </header>
      <div className="app-content">
        <TextEditor />
      </div>
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
