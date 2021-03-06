import {Route, Switch} from 'react-router-dom'
import List from "./List";
import Full from "./Full";
import React from "react";

function Router() {
    return (
        <Switch>
            <Route exact path={"/person"} component={List}/>
            <Route exact path={"/person/:id"} component={Full}/>
        </Switch>
    )
}

export default Router