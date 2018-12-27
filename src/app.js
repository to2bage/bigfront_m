import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";
import routes from "./routes.js";

export default () => (
    <Switch>
        {
            routes.map(({name, path, exact=true, component}) => (
                <Route name={name} path={path} exact={exact} component={component} />
            ))
        }
    </Switch>
)