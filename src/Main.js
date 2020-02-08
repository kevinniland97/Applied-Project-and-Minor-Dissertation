import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import MainPage from './components/MainPage';
import Login from './components/Login';

/**
 * 
 */
const styles = {
  line: {
    height: 40,
    marginLeft: 15,
    marginRight: 15,
    borderRightStyle: 'solid',
    borderWidth: 1
  }
}

class Main extends Component {
    render() {
        return (
          <HashRouter>
            <div>
              <h1>Algorithms Visualizer</h1>
              <ul className="header">
                <li><NavLink to="/">Sorting</NavLink></li>
                <div style={ styles.line }></div>
                <li><NavLink to="/account">User Account</NavLink></li>
                <div style={ styles.line }></div>
                <li><NavLink to="/tba">TBA</NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/account" component={Login}/>
              </div>
            </div>
          </HashRouter>
        );
      }
    }
    
export default Main;