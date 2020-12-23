import * as React from "react";
import { Link, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Link to="/home">home</Link>
        </div>
        <Switch>
          <Route path="/" component={() => <div>i am in home</div>} />
          <Route path="/home" component={() => <div> i am user</div>} />
        </Switch>
      </React.Fragment>
    );
  }
}
