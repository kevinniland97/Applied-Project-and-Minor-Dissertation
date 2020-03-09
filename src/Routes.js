import { Route, Switch } from "react-router-dom";
import React from "react";
import MainPage from "./MainPage.js";
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
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/userProfile" component={UserProfile} />
        </Switch>
    );
}

export default Routes;