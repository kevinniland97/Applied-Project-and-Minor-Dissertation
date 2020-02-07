import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import MainPage from './components/MainPage';

class Main extends Component {
    render() {
        return (
          <HashRouter>
            <div>
              <h1>Algorithms Visualizer</h1>
              <ul className="header">
                <li><NavLink to="/">Sorting</NavLink></li>
                <li><NavLink to="/tba">TBA</NavLink></li>
                <li><NavLink to="/tba">TBA</NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/" component={MainPage}/>
              </div>
            </div>
          </HashRouter>
        );
      }
    }
    
export default Main;