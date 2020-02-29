import React, { Component } from 'react';
import { AppBar, Button, Toolbar, Typography, IconButton, Slider, ClickAwayListener } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive';

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
function MainToolbar(props) {
  var openMenu;

  return (
    <div>
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >Sorting</Typography>
          <div style={ styles.line }></div>
          <MediaQuery minWidth={ 1000 }>
            <Typography style={{ flexGrow: 1 }} variant="h6">
              <MainToolbarButtons history={ props.history }/>
            </Typography>
          </MediaQuery> 
          <MediaQuery maxWidth={ 1000 }>        
            <IconButton onClick={ (e) => openMenu(e) } edge="start" style={ styles.menuButton } color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </MediaQuery>
          <MenuDropdown onMenuClick={(e) => { openMenu = e; }} history={ props.history }/>
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

  //
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
        onClose={handleClose}
      >
        <MenuItem onClick={ (e) => { handleClose(e); props.history.push('/bubble-sort') }}>Bubble Sort</MenuItem>
        <MenuItem onClick={ (e) => { handleClose(e); props.history.push('/insertion-sort') }}>Insertion Sort</MenuItem>
        <MenuItem onClick={ (e) => { handleClose(e); props.history.push('/selection-sort') }}>Selection Sort</MenuItem>
        <MenuItem onClick={ (e) => { handleClose(e); props.history.push('/quick-sort') }}>Quick Sort</MenuItem>
        <MenuItem onClick={ (e) => { handleClose(e); props.history.push('/merge-sort') }}>Merge Sort</MenuItem>
        <MenuItem onClick={ (e) => { handleClose(e); props.history.push('/bogo-sort') }}>Bogo Sort</MenuItem>
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
        <Button color="inherit" onClick={() => props.history.push('#/bubble-sort')}>Bubble Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('#/insertion-sort')}>Insertion Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('#/selection-sort')}>Selection Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('#/quick-sort')}>Quick Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('#/merge-sort')}>Merge Sort</Button>
        <Button color="inherit" onClick={() => props.history.push('#/bogo-sort')}>Bogo Sort</Button>
      </div>
  );
}

export default MainToolbar;