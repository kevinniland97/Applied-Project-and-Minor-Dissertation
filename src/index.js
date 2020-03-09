import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainPage from "./MainPage.js"; 
import Routes from './Routes.js';
import Users from './components/Users';
import Contact from './components/Contact';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory()
const app = (
    <Router history={history}>
        <Routes />
    </Router>
    );

ReactDOM.render(app, document.getElementById('root'));

// const routing = (
//     <Router> 
//         <div>
//             {/* <Route path="/" component={MainPage} /> */}
//             <Route path="/users" component={Users} />
//             <Route path="/contact" component={Contact} />
//         </div>
//     </Router>
// )

// ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();