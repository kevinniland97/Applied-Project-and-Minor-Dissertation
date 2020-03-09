import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
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
            {/* Added routing for all algorithms - pure and utter cowboy code - FIX!!!! */}
            <Route exact path="/" component={MainPage} />
            <Route exact path="/bubble-sort" component={MainPage} />
            <Route exact path="/insertion-sort" component={MainPage} />
            <Route exact path="/merge-sort" component={MainPage} />
            <Route exact path="/quick-sort" component={MainPage} />
            <Route exact path="/selection-sort" component={MainPage} />
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/userProfile" component={UserProfile} />
        </Switch>
    );
}

export default Routes;