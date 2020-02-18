import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { loginUser } from "../actions";
import { withStyles } from "@material-ui/styles";
import { LoginUser } from './UserFunctions';

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
class Login extends Component {
  // state = { email: "", password: "" };

//   /**
//    * 
//    */
//   handleEmailChange = ({ target }) => {
//     this.setState({ email: target.value });
//   };

  /**
   * 
   */
  // handlePasswordChange = ({ target }) => {
  //   // console.log(target.value);
  //   this.setState({ password: target.value });
  // };

//   /**
//    * 
//    */
//   handleSubmit = () => {
//     const { dispatch } = this.props;
//     const { email, password } = this.state;

//     dispatch(loginUser(email, password));
//   };

  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    LoginUser(user).then(res => {
      if (!res.error) {
        this.props.history.push('/userProfile')
      }
    })
  }

  /**
   * 
   */
  render() {
    const { classes, loginError, isAuthenticated } = this.props;
    // if (isAuthenticated) {
    //   return <Redirect to="/" />;
    // } else {
    return (
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          {loginError && (
            <Typography component="p" className={classes.errorText}>
              Incorrect email or password.
            </Typography>
          )}
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
            onClick={this.onSubmit}
          >
            Sign In
          </Button>
          Don't have an account? <Link to="/signUp">Create an account</Link>
        </Paper>
      </Container>
    );
  }
}
// }

// /**
//  * 
//  * @param {*} state 
//  */
// function mapStateToProps(state) {
//   return {
//     isLoggingIn: state.auth.isLoggingIn,
//     loginError: state.auth.loginError,
//     isAuthenticated: state.auth.isAuthenticated
//   };
// }

/**
 * 
 */
export default withStyles(styles)(Login);