import React from 'react';
import { AppBar, Button, Toolbar, Typography, IconButton, ButtonGroup } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
            <IconButton onClick={(e) => menu(e)} edge="start" style={styles.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </MediaQuery>
          
          <MenuDropdown onMenuClick={(e) => {menu = e;}} history={props.history} />

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
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('heap-sort')}}>Heap Sort (Almost)</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('insertion-sort')}}>Insertion Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('merge-sort')}}>Merge Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('quick-sort')}}>Quick Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('selection-sort')}}>Selection Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('shell-sort')}}>Shell Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('bogo-sort')}}>Bogo Sort (Not working)</MenuItem>
      </Menu>
  );
}

/**
 * 
 * @param {*} props 
 */
function MainToolbarButtons(props) {
  return (
      <div className="sort-bar">
        <Button style={styles.title} color="inherit" onClick={() => props.history.push('bubble-sort')}>Bubble Sort</Button>
        <Button style={styles.title} color="inherit" onClick={() => props.history.push('heap-sort')}>Heap Sort (Almost)</Button>
        <Button style={styles.title} color="inherit" onClick={() => props.history.push('insertion-sort')}>Insertion Sort</Button>
        <Button style={styles.title} color="inherit" onClick={() => props.history.push('merge-sort')}>Merge Sort</Button>
        <Button style={styles.title} color="inherit" onClick={() => props.history.push('quick-sort')}>Quick Sort</Button>
        <Button style={styles.title} color="inherit" onClick={() => props.history.push('selection-sort')}>Selection Sort</Button>
        <Button style={styles.title} color="inherit" onClick={() => props.history.push('shell-sort')}>Shell Sort</Button>
        <Button style={styles.title} color="inherit" onClick={() => props.history.push('bogo-sort')}>Bogo Sort (Not working)</Button>
      </div>
  );
}

export default MainToolbar;