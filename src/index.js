import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Index = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDom.render(<Index />, document.getElementById("content"));
