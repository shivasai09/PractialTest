import * as React from "react";
import { Link, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Link to="/user">user</Link>
        </div>
        <Switch>
          <Route exact path="/" component={() => <div>i am in home</div>} />
          <Route exact path="/user" component={() => <div> i am user</div>} />
        </Switch>
      </React.Fragment>
    );
  }
}
