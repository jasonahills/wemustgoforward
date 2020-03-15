import React from 'react';
import ReactDOM from 'react-dom';
import 'wmgf/style/vars.css';
import 'wmgf/style/index.css';
import 'wmgf/style/text.css';
import 'wmgf/style/elements.css';
import 'wmgf/style/layout.css';
import App from 'wmgf/containers/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister()
