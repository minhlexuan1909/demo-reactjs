import "./App.css";

import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ProductDetailPage from "./components/ProductDetailPage";
import ProductPage from "./components/ProductPage";
import RedirectedPage from "./components/RedirectedPage";
import UnauthorizedPage from "./components/UnauthorizedPage";

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
            <NavLink exact to="/product" activeClassName="active-header-item">
              Product
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
          <Route exact path="/product">
            <ProductPage />
          </Route>
          <Route exact path="/product/:id">
            <ProductDetailPage />
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
