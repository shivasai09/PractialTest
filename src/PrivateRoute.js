import * as React from "react";
import { Redirect, Route } from "react-router-dom";

export default ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        localStorage.getItem("isLoggedIn") === "true" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
