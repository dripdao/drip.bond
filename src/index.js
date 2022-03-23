import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
// basename="template_react"
ReactDOM.render(
	<Router hashType="hashbang">
		<App />
	</Router>,
  document.getElementById('root')
);

reportWebVitals();
