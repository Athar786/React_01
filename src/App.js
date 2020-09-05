import React from "react";
import "./App.css";

import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { Buttom } from "./components/Button";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavLink, Form } from "react-bootstrap";
import { Emp } from "./components/Emp";
import { Signup } from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <a className="m-9=  justify-content-left" href="/Login">
          Login
        </a>
        |
        <a className="m-9  justify-content-left" href="/signup">
          Sign Up
        </a>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path='/login' component={Login} />
          <Route path="/signup" component={Signup}/>
          <Route path="/emp" component={Emp} />
        </Switch>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
