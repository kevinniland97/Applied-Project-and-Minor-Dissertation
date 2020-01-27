import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUpUser } from "../actions";
import { withStyles } from "@material-ui/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const styles = () => ({
  "@global": {
    body: {
      backgroundColor: "#fff"
    }
  },
  paper: {
    marginTop: 100,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f50057"
  },
  form: {
    marginTop: 1
  },
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center"
  }
});

/**
 * 
 */
class SignUp extends Component {
  state = { username: "", firstName: "", lastName: "", email: "", password: "" };

  /**
   * 
   */
  handleUsernameChange = ({ target }) => {
    this.setState({ username: target.value });
  };

  /**
   * 
   */
  handleFirstNameChange = ({ target }) => {
    this.setState({ firstName: target.value });
  };

  /**
   * 
   */
  handleLastNameChange = ({ target }) => {
    this.setState({ lastName: target.value });
  };

  /**
   * 
   */
  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  /**
   * 
   */
  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  /**
   * 
   */
  handleSubmit = () => {
    const { dispatch } = this.props;
    const { username, firstName, lastName, email, password } = this.state;

    dispatch(signUpUser(username, firstName, lastName, email, password));
  };

  /**
   * 
   */
  render() {
    const { classes, signUpError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return (
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              onChange={this.handleUsernameChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              onChange={this.handleFirstNameChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              onChange={this.handleLastNameChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={this.handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.handlePasswordChange}
            />
            {signUpError && (
              <Typography component="p" className={classes.errorText}>
                Invalid credentials.
              </Typography>
            )}
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Sign Up
            </Button>
          </Paper>
        </Container>
      );
    }
  }
}

/**
 * 
 * @param {*} state 
 */
function mapStateToProps(state) {
  return {
    isSigningUp: state.auth.isLoggingIn,
    signUpError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

/**
 * 
 */
export default withStyles(styles)(connect(mapStateToProps)(SignUp));