import React from 'react';
import { AppBar, Button, Toolbar, Typography, IconButton, ButtonGroup } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive';
import { Dropdown } from 'react-bootstrap';
import '../styling/MainPage.css';

const styles = {
    line: {
      height: 40,
      marginLeft: 15,
      marginRight: 15,
      borderRightStyle: 'solid',
      borderWidth: 1
    },
    menuButton: {
      position: 'absolute',
      right: 15
    },
    title: {
      textTransform: 'capitalize',
      marginLeft: 15,
      fontWeight: 'bold',
      color: 'white'
    }
  }


  const loggedIn = localStorage.getItem('loggedIn') === 'true'; // Gets loggedIn if true
  // const loggedOut = localStorage.setItem('loggedIn', loginStatus.loggedIn) === 'false'; // Sets logged in status to true
  const loggedInUser = loggedIn ? localStorage.getItem('user') : ""; // Will display logged in user if loggedIn is true
  
  function logOut() {
    localStorage.clear();
  
    window.location.reload();
  }
  
  /**
   * Toolbar for sorts page
   */
  function SortsToolbar() {
    var menu;
  
    return (
      <div>
      <AppBar position="static">
          <Toolbar className="main-toolbar">
            {/* <Typography variant="h6" style={styles.title}>Sorting</Typography> */}
            <Dropdown as={ButtonGroup}>
              <Button variant="success, h6" color="white" style={styles.title}>Sorts</Button>
  
              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
  
              <Dropdown.Menu>
                <Dropdown.Item href="/">Sorting</Dropdown.Item>
                <Dropdown.Item href="/login">Login/Register</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
  
            <div style={styles.line}></div>
  
            <MediaQuery minWidth={1000}>
              <Typography style={{ flexGrow: 1 }} variant="h6">
              </Typography>
            </MediaQuery> 
  
            <MediaQuery maxWidth={1000}>        
              <IconButton onClick={(e) => menu(e)} edge="start" style={styles.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </MediaQuery>

            <div style={styles.line}></div>
            
            {/* Display logged in user */}
            { loggedInUser }

            <Dropdown as={ButtonGroup}>
              <Button color="#FFFFFF" style={styles.title} onClick={logOut}>Log Out</Button>
            </Dropdown>
          </Toolbar>
      </AppBar>
      </div>
    );
  }

  export default SortsToolbar;