import {Route, Switch} from 'react-router-dom'
import List from "./List";
import Full from "./Full";

function Router() {
    return (
        <Switch>
            <Route exact path={"/post"} component={List}/>
            <Route exact path={"/post/:id"} component={Full}/>
        </Switch>
    )
}

export default Router