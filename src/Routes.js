import { Route, Switch } from "react-router-dom";
import React from "react";
import MainPage from "./MainPage.js";
import Users from "./components/Users.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import UserProfile from "./components/UserProfile.js";

/**
 * 
 */
function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/users" component={Users} />
        </Switch>
    );
}

export default Routes;