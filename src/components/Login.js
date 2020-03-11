import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
// import { LoginUser } from './UserFunctions';
import { login } from './UserFunctions';
import LoginRegisterToolbar from './LoginRegisterToolbar';
import '../styling/LoginPage.css';

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

class Login extends Component {
  constructor() {
      super()
      this.state = {
          email: '',
          password: ''
      }

      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e) {
      this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit (e) {
      e.preventDefault()

      const user = {
          email: this.state.email,
          password: this.state.password
      }

      login(user).then(res => {
          if (!res.error) {
              this.props.history.push('/')
          }
      })
  }

  render () {
      return (
          <div className="App">
            <LoginRegisterToolbar />
              <div className="row">
                  <div className="col-md-6 mt-5 mx-auto">
                      <form noValidate onSubmit={this.onSubmit}>
                          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                          <div className="form-group">
                              <label htmlFor="email">Email Address</label>
                              <input type="email"
                                  className="form-control"
                                  name="email"
                                  placeholder="Enter Email"
                                  value={this.state.email}
                                  onChange={this.onChange} />
                          </div>
                          <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input type="password"
                                  className="form-control"
                                  name="password"
                                  placeholder="Enter Password"
                                  value={this.state.password}
                                  onChange={this.onChange} />
                          </div>

                          <button type="submit" className="btn btn-lg btn-primary btn-block">
                              Sign in
                          </button>
                      </form>
                      <div className="linkToLoginRegister">
                        Don't have an account? <Link to="/register">Create an account</Link>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
}

export default Login;



// class Login extends Component {
//   // state = { email: "", password: "" };

// //   /**
// //    * 
// //    */
// //   handleEmailChange = ({ target }) => {
// //     this.setState({ email: target.value });
// //   };

//   /**
//    * 
//    */
//   // handlePasswordChange = ({ target }) => {
//   //   // console.log(target.value);
//   //   this.setState({ password: target.value });
//   // };

// //   /**
// //    * 
// //    */
// //   handleSubmit = () => {
// //     const { dispatch } = this.props;
// //     const { email, password } = this.state;

// //     dispatch(loginUser(email, password));
// //   };

//   constructor() {
//     super()

//     this.state = {
//       email: '',
//       password: ''
//     }

//     this.onChange = this.onChange.bind(this)
//     this.onSubmit = this.onSubmit.bind(this)
//   }

//   onChange(e) {
//     this.setState ({
//       [e.target.name]: e.target.value
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault()

//     const user = {
//       email: this.state.email,
//       password: this.state.password
//     }

//     LoginUser(user).then(res => {
//       if (!res.error) {
//         this.props.history.push('/userProfile')
//       }
//     })
//   }

//   /**
//    * 
//    */
//   render() {
//     const { classes, loginError, isAuthenticated } = this.props;
//     if (isAuthenticated) {
//       return <Redirect to="/" />;
//     } else {
//     return (
//       <div>
//         <LoginRegisterToolbar history={this.props.history} />
//       {/* // <Container component="main" maxWidth="xs"> */}
//         <Paper className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form noValidate onSubmit={this.onSubmit}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             value={this.state.email}
//             onChange={this.onChange}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             value={this.state.password}
//             onChange={this.onChange}
//           />
//           {loginError && (
//             <Typography component="p" className={classes.errorText}>
//               Incorrect email or password.
//             </Typography>
//           )}
//           <Button
//             type="button"
//             fullWidth
//             variant="contained"
//             color="primary"
//             // // className={classes.submit}
//             // onClick={this.onSubmit}
//           >
//             Sign In
//           </Button>
//           </form>
//           Don't have an account? <Link to="/signUp">Create an account</Link>
//         </Paper>
//       {/* // </Container> */}
//       </div>
//       )}}}
      
// //       <div className="container">
// //         <div className="row">
// //           <div className="col-md-6 mt-5 mx-auto">
// //             <form noValidate onSubmit={this.onSubmit}>
// //               <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
// //               <div className="form-group">
// //                 <label htmlFor="email">Email Address</label>
// //                 <input type="email"
// //                 className="form-control"
// //                 name="email"
// //                 placeholder="Email Address"
// //                 value={this.state.email} 
// //                 onChange={this.onChange} />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="password">Password</label>
// //                 <input type="password"
// //                 className="form-control"
// //                 name="password"
// //                 placeholder="Password"
// //                 value={this.state.password} 
// //                 onChange={this.onChange} />
// //               </div>

// //               <button className="btn btn-lg btn-primary btn-block">
// //                 Sign In
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }


// // /**
// //  * 
// //  * @param {*} state 
// //  */
// // function mapStateToProps(state) {
// //   return {
// //     isLoggingIn: state.auth.isLoggingIn,
// //     loginError: state.auth.loginError,
// //     isAuthenticated: state.auth.isAuthenticated
// //   };
// // }

// /**
//  * 
//  */
// export default withStyles(styles)(Login);