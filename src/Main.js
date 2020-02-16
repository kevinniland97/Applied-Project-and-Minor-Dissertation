import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './styling/Main.css';
import MainPage from './components/MainPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { AppBar, Button, Toolbar, Typography, IconButton, Slider, ClickAwayListener } from '@material-ui/core';
import { Menu, MenuItem } from '@progress/kendo-react-layout';
// import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive';

/**
 * 
 */
const styles = {
  line: {
    height: 40,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    borderRightStyle: 'solid',
    borderWidth: 1,
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
                {/* <div style={ styles.line }></div> */}
                {/* <li style={ styles.line }></li> */}
                <li><NavLink to="/login-register">Login/Register</NavLink></li>
                {/* <div style={ styles.line }></div> */}
                <li><NavLink to="/account">User Profile</NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/" component={MainPage} />
                <Route exact path="/login-register" component={Login} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/userProfile" component={UserProfile} />
              </div>

              {/* https://www.telerik.com/kendo-react-ui/components/layout/menu/routing/ */}
            </div>
          </HashRouter>
        );
      }
    }
    
export default Main;