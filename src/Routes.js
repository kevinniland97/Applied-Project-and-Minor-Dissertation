import { Route, Switch } from "react-router-dom";
import React from "react";
import MainPage from "./MainPage.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Profile from "./components/Profile.js";
import ScreenFlowEmbedder from "./screenrecord/embed";
import Sorts from "./components/Sorts";

/**
 * Provides routes for each page in the application
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
            <Route exact path="/bogo-sort" component={MainPage} />
            <Route exact path="/heap-sort" component={MainPage} />
            <Route exact path="/shell-sort" component={MainPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/userProfile" component={Profile} />
            <Route path="/screenRecord" component={ScreenFlowEmbedder} />
            <Route path="/sorts" component={Sorts} />
        </Switch>
    );
}

export default Routes;