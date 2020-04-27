import React from 'react';
import { AppBar, Button, Toolbar, Typography, IconButton, ButtonGroup } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive';
import { Dropdown } from 'react-bootstrap';
import '../styling/MainPage.css';

/**
 * Styling for toolbar
 */
const styles = {
  line: {
    height: 40,
    marginLeft: 15,
    marginRight: 15,
    borderRightStyle: 'solid',
    borderWidth: 1
  },
  button: {
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
const loggedInUser = loggedIn ? localStorage.getItem('user') : ""; // Will display logged in user if loggedIn is true

function logOut() {
  localStorage.clear();

  window.location.reload();
}

/**
 * Toolbar for main page. Allows user to choose a sorting algorithm to visualize
 * 
 * @param {*} props 
 */
function MainToolbar(props) {
  var menu;

  return (
    <div>
    <AppBar className="main-toolbar" position="static" >
        <Toolbar className="main-toolbar">
          {/* Dropdown menu for links to other pages */}
          <Dropdown as={ButtonGroup}>
            {/* <Button color="#FFFFFF" style={styles.title}>Sorting</Button> */}
            <Button color="#FFFFFF" style={styles.title}>Sorting</Button>
            
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu className="dropdown-button">
              <Dropdown.Item href="/login">Login/Register</Dropdown.Item>
              <Dropdown.Item href="/sorts">Sorts</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div style={styles.line}></div>

          <MediaQuery minWidth={1000}>
            <Typography style={{ flexGrow: 1 }}>
              <MainToolbarButtons className="menu" history={ props.history } />
            </Typography>
          </MediaQuery> 

          <MediaQuery maxWidth={1000}>        
            <IconButton onClick={(e) => menu(e)} edge="start" style={styles.button} aria-label="menu">
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

/**
 * Buttons for the MainToolbar - Allows user to choose sorting algorithm to visualize
 * 
 * @param {*} props 
 */
function MainToolbarButtons(props) {
  return (
      <div className="sort-bar">
        <Button style={styles.title} onClick={() => props.history.push('bubble-sort')}>Bubble Sort</Button>
        <Button style={styles.title} onClick={() => props.history.push('heap-sort')}>Heap Sort (Almost)</Button>
        <Button style={styles.title} onClick={() => props.history.push('insertion-sort')}>Insertion Sort</Button>
        <Button style={styles.title} onClick={() => props.history.push('merge-sort')}>Merge Sort</Button>
        <Button style={styles.title} onClick={() => props.history.push('quick-sort')}>Quick Sort</Button>
        <Button style={styles.title} onClick={() => props.history.push('selection-sort')}>Selection Sort</Button>
        <Button style={styles.title} onClick={() => props.history.push('shell-sort')}>Shell Sort</Button>
        <Button style={styles.title} onClick={() => props.history.push('bogo-sort')}>Bogo Sort (Not working)</Button>
      </div>
  );
}

export default MainToolbar;