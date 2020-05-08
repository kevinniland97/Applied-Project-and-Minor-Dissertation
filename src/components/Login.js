import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from './UserFunctions';
import LoginRegisterToolbar from './LoginRegisterToolbar';
import '../styling/LoginRegPage.css';

// Login page
class Login extends Component {
  constructor() {
      super()

      /**
       * State for login - stores email and password and
       * determines if loggedIn or not
       */ 
      this.state = {
          email: '',
          password: '',
          loggedIn: false
      }

      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e) {
      this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit (e) {
      e.preventDefault()

      // Logged in user
      const user = {
          email: this.state.email,
          password: this.state.password,
          loggedIn: true
      }

      /**
       * When logged in, redirect to the sorting page (Bubble Sort is the default sorting algorithm and, 
       * as such, user is redirected here on login)
       * 
       * Set the user value in local storage to that of the user's email and set loggedIn to true
       */ 
      login(user).then(res => {
        // if (!res.error) {
            this.props.history.push('/bubble-sort')

            localStorage.setItem("user", user.email);
            localStorage.setItem("loggedIn", user.loggedIn)
        // }
      })
  }

  // Uses a standard form to allow the user to login
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

                      {/* Allow the user to redirect to the register page if user doesn't have an account */}
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