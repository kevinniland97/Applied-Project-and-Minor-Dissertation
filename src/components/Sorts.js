import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
// import { signUpUser } from "../actions";
import { withStyles } from "@material-ui/styles";
// import { RegisterUser } from './UserFunctions';
import { register } from './UserFunctions';
import LoginRegisterToolbar from './LoginRegisterToolbar';

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


class Sorts extends Component {
    render() {
        const { classes } = this.props;
        console.log(this.state);
        
        return (
        <div className="App">
            {/* <MainToolbar history={this.props.history} /> */}
        </div>
        );
    }
}

export default withStyles(styles)(Sorts);