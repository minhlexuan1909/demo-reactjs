import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import UnauthorizedPage from "./components/UnauthorizedPage";
import RedirectedPage from "./components/RedirectedPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul className="header">
          <li className="header-item">
            <NavLink exact to="/" activeClassName="active-header-item">
              Home
            </NavLink>
          </li>
          <li className="header-item">
            <NavLink exact to="/about" activeClassName="active-header-item">
              About
            </NavLink>
          </li>
          <li className="header-item">
            <NavLink
              exact
              to="/unauthorized"
              activeClassName="active-header-item"
            >
              Unauthorized
            </NavLink>
          </li>
          <li className="header-item">
            <NavLink
              exact
              to="/redirected"
              activeClassName="active-header-item"
            >
              Redirected
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/unauthorized">
            <UnauthorizedPage />
          </Route>
          <Route exact path="/redirected">
            <RedirectedPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
