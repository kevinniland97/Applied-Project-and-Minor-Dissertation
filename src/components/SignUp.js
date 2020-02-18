import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUpUser } from "../actions";
import { withStyles } from "@material-ui/styles";
import { RegisterUser } from './UserFunctions';

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
  // state = { username: "", firstName: "", lastName: "", email: "", password: "" };

  // /**
  //  * 
  //  */
  // handleUsernameChange = ({ target }) => {
  //   this.setState({ username: target.value });
  // };

  // /**
  //  * 
  //  */
  // handleFirstNameChange = ({ target }) => {
  //   this.setState({ firstName: target.value });
  // };

  // /**
  //  * 
  //  */
  // handleLastNameChange = ({ target }) => {
  //   this.setState({ lastName: target.value });
  // };

  // /**
  //  * 
  //  */
  // handleEmailChange = ({ target }) => {
  //   this.setState({ email: target.value });
  // };

  // /**
  //  * 
  //  */
  // handlePasswordChange = ({ target }) => {
  //   this.setState({ password: target.value });
  // };

  // /**
  //  * 
  //  */
  // handleSubmit = () => {
  //   const { dispatch } = this.props;
  //   const { username, firstName, lastName, email, password } = this.state;

  //   dispatch(signUpUser(username, firstName, lastName, email, password));
  // };

  constructor() {
    super()

    this.state = {
      first_name: '',
      last_name: '',
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

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }

    RegisterUser(newUser).then(res => {
      this.props.history.push('/signUp')
    })
  }

  /**
   * 
   */
  render() {
    // const { classes, signUpError, isAuthenticated } = this.props;
    // if (isAuthenticated) {
    //   return <Redirect to="/" />;
    // } else {
    return (
      // <Container component="main" maxWidth="xs">
      //   <Paper className={classes.paper}>
      //     <Avatar className={classes.avatar}>
      //       <LockOutlinedIcon />
      //     </Avatar>
      //     <Typography component="h1" variant="h5">
      //       Sign up
      //     </Typography>
      //     {/* <TextField
      //       variant="outlined"
      //       margin="normal"
      //       fullWidth
      //       id="username"
      //       label="Username"
      //       name="username"
      //       onChange={this.handleUsernameChange}
      //     /> */}
      //     <form>
      //     <TextField
      //       variant="outlined"
      //       margin="normal"
      //       fullWidth
      //       id="first_name"
      //       label="First Name"
      //       name="first_name"
      //       value={this.state.first_name}
      //       onChange={this.onChange}
      //     />
      //     <TextField
      //       variant="outlined"
      //       margin="normal"
      //       fullWidth
      //       id="last_name"
      //       label="Last Name"
      //       name="last_name"
      //       value={this.state.last_name}
      //       onChange={this.onChange}
      //     />
      //     <TextField
      //       variant="outlined"
      //       margin="normal"
      //       fullWidth
      //       id="email"
      //       label="Email Address"
      //       name="email"
      //       value={this.state.email}
      //       onChange={this.onChange}
      //     />
      //     <TextField
      //       variant="outlined"
      //       margin="normal"
      //       fullWidth
      //       name="password"
      //       label="Password"
      //       type="password"
      //       id="password"
      //       value={this.state.password}
      //       onChange={this.onChange}
      //     />
      //     {/* {signUpError && (
      //       <Typography component="p" className={classes.errorText}>
      //         Invalid credentials.
      //       </Typography>
      //     )} */}
      //     <Button
      //       type="button"
      //       fullWidth
      //       variant="contained"
      //       color="primary"
      //       // className={classes.submit}
      //       onClick={this.onSubmit}
      //     >
      //       Sign Up
      //     </Button>
      //     </form>
      //   </Paper>
      // </Container>

      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input type="test"
                className="form-control"
                name="first_name"
                placeholder="First Name"
                value={this.state.first_name} 
                onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input type="test"
                className="form-control"
                name="last_name"
                placeholder="Last Name"
                value={this.state.last_name} 
                onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
                value={this.state.email} 
                onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={this.state.password} 
                onChange={this.onChange} />
              </div>

              <button type="submit" className="btn btn-lg btn-primary btn-block">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  // }
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
export default withStyles(styles)(SignUp);