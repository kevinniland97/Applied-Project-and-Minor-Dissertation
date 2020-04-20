import React from 'react';
import { AppBar, Button, Toolbar, Typography, IconButton, ButtonGroup } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive';
import { Dropdown } from 'react-bootstrap';

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
   * Toolbar for login page
   */
  function LoginRegisterToolbar() {
    var menu;
  
    return (
      <div>
      <AppBar position="static">
          <Toolbar>
            {/* <Typography variant="h6" style={styles.title}>Sorting</Typography> */}
            <Dropdown as={ButtonGroup}>
              <Button variant="success, h6" color="white" style={styles.title}>Login/Register</Button>
  
              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
  
              <Dropdown.Menu>
                <Dropdown.Item href="/">Sorting</Dropdown.Item>
                <Dropdown.Item href="/userProfile">Account</Dropdown.Item>
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
          </Toolbar>
      </AppBar>
      </div>
    );
  }

  export default LoginRegisterToolbar;