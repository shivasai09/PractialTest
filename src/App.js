import * as React from "react";
import { Link, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Link to="/login">user</Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/" Component={<div>i am in home</div>} />
          <Route
            exact
            path="/login"
            component={() => <div> i am in login</div>}
          />
        </Switch>
      </React.Fragment>
    );
  }
}
