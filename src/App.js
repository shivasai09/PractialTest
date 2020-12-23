import * as React from "react";
import { Link, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { LoginPage } from "./LoginPage";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={() => <div>i am in home</div>}
          />
          <PublicRoute exact path="/login" component={LoginPage} />
        </Switch>
      </React.Fragment>
    );
  }
}
