import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Router from "react-router-dom/BrowserRouter";
import { AnimatedSwitch } from "react-router-transition";
import Route from "react-router-dom/Route";
import MainNav from "./components/MainNav/MainNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div {...this.props}>
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
              <Route exact path="/" component={Header} />
              <Route path="/projects" component={Projects} />
            </AnimatedSwitch>

            <div className="main-nav-wrapper">
              <MainNav />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
