import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";

export default class App extends Component {
  state = {
    userAdmin: false,
  };

  setRole = () => {
    console.log(123)
  }

  render() {
    let asyncRoute = null;
    if(this.state.userAdmin) {
      asyncRoute = <Route path="/layout" component={Layout}></Route>
    }

    return (
      <div>
        <Switch>
          <Route path="/login" component={Login}></Route>
          {/* {asyncRoute} */}
          <Route path="/layout" component={Layout}></Route>
          <Route path="/404" component={ErrorPage}></Route>
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}
