import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import MainPage from "./MainPage.js"; 
import Routes from './Routes.js';
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory()
const app = (
    // Routes
    <Router history={history}>
        <Routes />
    </Router>
    );

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();