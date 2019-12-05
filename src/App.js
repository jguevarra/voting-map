import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// UI/CSS imports
import AppBar from "./Components/AppBar.js";
import Footer from "./Components/Footer.js";
// import MapComp from "./Components/MapComp.js";
// import SearchBar from "./Components/SearchBar.js";
import "./App.css";

// router imports
import About from "./Components/About.js";
import Home from "./Components/Home.js";
import Group from "./Components/Group.js";
import HackCville from "./Components/HackCville.js";
import pollLocation from "./Components/pollLocation.js";

export default class App extends Component {

  render() {
    return (
      <div>
        <AppBar />

        <BrowserRouter>
          <div>
            <Route path="/" component={Home} exact />
            <Route path="/map" component={pollLocation} exact />
            <Route path="/about" component={About} exact />
            <Route path="/group" component={Group} exact />
            <Route path="/hackcville" component={HackCville} exact />
          </div>
        </BrowserRouter>

        {/* <div class="static_image"></div> */}

        <Footer />
      </div>
    );
  }
}