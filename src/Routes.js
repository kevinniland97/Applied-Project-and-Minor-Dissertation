import { Route, Switch } from "react-router-dom";
import React from "react";
import MainPage from "./MainPage.js";

/**
 * 
 */
function Routes() {
    return (
        <Switch>
            <Route path="/" component={MainPage} />
        </Switch>
    );
}

export default Routes;