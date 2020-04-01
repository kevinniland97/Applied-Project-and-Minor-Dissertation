import React, { Component } from 'react';
import { AppBar, Button, Toolbar, Typography, IconButton, Slider, ClickAwayListener, ButtonGroup } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive';
import { Dropdown } from 'react-bootstrap';

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
  menuButton: {
    position: 'absolute',
    right: 15
  },
  title: {
    marginLeft: 15
  }
}

/**
 * Determines login status
 */
const loginStatus = {
  loggedIn: true
}

const loggedIn = localStorage.getItem('loggedIn') === 'true'; // Gets loggedIn if true
const loggedOut = localStorage.setItem('loggedIn', loginStatus.loggedIn) === 'false'; // Sets logged in status to true
const loggedInUser = loggedIn ? localStorage.getItem('user') : ""; // Will display logged in user if loggedIn is true

/**
 * 
 * @param {*} props 
 */
function MainToolbar(props) {
  var menu;

  return (
    <div>
    <AppBar position="static">
        <Toolbar>
          {/* <Typography variant="h6" style={styles.title}>Sorting</Typography> */}
          <Dropdown as={ButtonGroup}>
            <Button variant="success" variant="h6" color="white" style={styles.title}>Sorting</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item href="/login">Login/Register</Dropdown.Item>
              <Dropdown.Item href="/userProfile">Account</Dropdown.Item>
              <Dropdown.Item href="/screenRecord">Record</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div style={styles.line}></div>

          <MediaQuery minWidth={1000}>
            <Typography style={{ flexGrow: 1 }} variant="h6">
              <MainToolbarButtons history={ props.history } />
            </Typography>
          </MediaQuery> 

          <MediaQuery maxWidth={1000}>        
            <IconButton onClick={(e) => menu(e)} edge="start" style={styles.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </MediaQuery>
          
          <MenuDropdown onMenuClick={(e) => {menu = e;}} history={props.history} />

          { loggedInUser }

          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item loggedOut >Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Toolbar>
    </AppBar>
    </div>
  );
}

/**
 * 
 * @param {*} props 
 */
function MenuDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
      setAnchorEl(event.currentTarget);
  }

  function handleClose(event) {
      setAnchorEl(null);
  }

  props.onMenuClick(handleClick);

  return (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('bubble-sort')}}>Bubble Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('insertion-sort')}}>Insertion Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('merge-sort')}}>Merge Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('quick-sort')}}>Quick Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('selection-sort')}}>Selection Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('bogo-sort')}}>Bogo Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('heap-sort')}}>Heap Sort</MenuItem>
      </Menu>
  );
}

/**
 * 
 * @param {*} props 
 */
function MainToolbarButtons(props) {
  return (
      <div>
        <Button color="inherit" onClick={() => props.history.push('bubble-sort')}>Bubble Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('insertion-sort')}>Insertion Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('merge-sort')}>Merge Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('quick-sort')}>Quick Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('selection-sort')}>Selection Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('bogo-sort')}>Bogo Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('heap-sort')}>Heap Sort</Button>
      </div>
  );
}

export default MainToolbar;