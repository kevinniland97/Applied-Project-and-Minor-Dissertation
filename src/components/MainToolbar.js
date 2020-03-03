import React, { Component } from 'react';
import { AppBar, Button, Toolbar, Typography, IconButton, Slider, ClickAwayListener } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive';
import HamburgerMenu from './Hamburger.js';
import '../styling/MainToolbar.css';

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

function MainToolbar(props) {
  var menu;

  return (
    <div>
    <AppBar position="static">
        <Toolbar>
          <HamburgerMenu />

          <Typography variant="h6" style={styles.title}>Sorting</Typography>

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
        </Toolbar>
    </AppBar>
    </div>
  );
}

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
      </Menu>
  );
}

function MainToolbarButtons(props) {
  return (
      <div>
        <Button color="inherit" onClick={() => props.history.push('bubble-sort')}>Bubble Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('insertion-sort')}>Insertion Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('merge-sort')}>Merge Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('quick-sort')}>Quick Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('selection-sort')}>Selection Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('bogo-sort')}>Bogo Sort</Button>
      </div>
  );
}

export default MainToolbar;