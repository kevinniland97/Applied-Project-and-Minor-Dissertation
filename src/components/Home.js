import React, { Component } from 'react';
import { AppBar, Button, Toolbar, Typography, IconButton, Slider, ClickAwayListener } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive';

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
  }
}

/**
 * 
 * @param {*} props 
 */
function Home(props) {
  var menu;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Algorithms Visualiser</Typography>
          <div style={styles.line}></div>
          <MediaQuery minWidth={1000}>
            <Typography style={{ flexGrow: 1 }} variant="h6">
              <HomeButtons history={ props.history }/>
            </Typography>
          </MediaQuery>
          <MediaQuery maxWidth={1000}>        
            <IconButton onClick={(e) => menu(e)} edge="start" style={ styles.menuButton } color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </MediaQuery>
          <MenuDropdown onMenuClick={(e) => { menu = e; }} history={ props.history }/>
        </Toolbar>
      </AppBar>
    </div>
  )
};

/**
 * 
 * @param {*} props 
 */
function MenuDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  /**
   * 
   * @param {*} event 
   */
  function handleClick(event) {
      setAnchorEl(event.currentTarget);
  }

  /**
   * 
   * @param {*} event 
   */
  function handleClose(event) {
      setAnchorEl(null);
  }

  props.onMenuClick(handleClick);

  /**
   * 
   */
  return (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>

        <MenuItem onClick={(e) => {handleClose(e); props.history.push('bubble-sort')}}>Bubble Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('insertion-sort')}}>Insertion Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('selection-sort')}}>Selection Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('merge-sort')}}>Merge Sort</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); props.history.push('quick-sort')}}>Quick Sort</MenuItem>
      </Menu>
  );
}

/**
 * 
 * @param {*} props 
 */
function HomeButtons(props) {
  return (
      <div>
        <Button color="inherit" onClick={() => props.history.push('bubble-sort')}>Bubble Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('insertion-sort')}>Insertion Sort (Not implemented)</Button>
        <Button color="inherit" onClick={() => props.history.push('selection-sort')}>Selection Sort (Not implemented)</Button>
        <Button color="inherit" onClick={() => props.history.push('merge-sort')}>Merge Sort (Not implemented)</Button>
        <Button color="inherit" onClick={() => props.history.push('quick-sort')}>Quick Sort (Not implemented)</Button>
      </div>
  );
}

export default Home;