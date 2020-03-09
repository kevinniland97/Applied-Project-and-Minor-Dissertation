import { Link, Route, Switch } from "react-router-dom";
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
            {/* Needed to add keyword exact to enable proper routing */}
            <Route path="/" component={MainPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/userProfile" component={UserProfile} />
        </Switch>
    );
}

export default Routes;