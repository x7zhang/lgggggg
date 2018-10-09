import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
//import configureStore from './store/configureStore'; // store = {configureStore};
import registerServiceWorker from './registerServiceWorker';



render(
	<Router>
      <App />
    </Router>,
    document.getElementById('root')
	)
registerServiceWorker();
