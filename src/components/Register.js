import React, { Component } from "react";
import { Link } from "react-router-dom";
import { register } from './UserFunctions';
import LoginRegisterToolbar from './LoginRegisterToolbar';

/**
 * 
 */
class Register extends Component {
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

  onChange (e) {
      this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit (e) {
      e.preventDefault()

      const newUser = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password
      }

      register(newUser).then(res => {
          this.props.history.push(`/login`)
      })
  }

  render () {
      return (
          <div className="App">
            <LoginRegisterToolbar />

              <div className="row">
                  <div className="col-md-6 mt-5 mx-auto">
                      <form noValidate onSubmit={this.onSubmit}>
                          <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                          <div className="form-group">
                              <label htmlFor="first_name">First Name</label>
                              <input type="text"
                                  className="form-control"
                                  name="first_name"
                                  placeholder="Enter First Name"
                                  value={this.state.first_name}
                                  onChange={this.onChange} />
                          </div>
                          <div className="form-group">
                              <label htmlFor="last_name">Last Name</label>
                              <input type="text"
                                  className="form-control"
                                  name="last_name"
                                  placeholder="Enter Last Name"
                                  value={this.state.last_name}
                                  onChange={this.onChange} />
                          </div>
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
                              <label htmlFor="password">Password </label>
                              <input type="password"
                                  className="form-control"
                                  name="password"
                                  placeholder="Enter Password"
                                  value={this.state.password}
                                  onChange={this.onChange} />
                          </div>

                          <button type="submit" className="btn btn-lg btn-primary btn-block">
                              Register
                          </button>
                      </form>
                      <div className="linkToLoginRegister">
                        Already have an account? <Link to="/login">Login</Link>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
}

export default Register;