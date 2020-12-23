import * as React from "react";
import { Redirect, Route } from "react-router-dom";

export default ({ Component, path, ...rest }) => {
  return (
    <Route
      {...rest}
      path={path}
      component={(props) => {
        if (localStorage.getItem("isLoggedIn")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
