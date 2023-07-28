import React, { Component } from "react";
import "./App.css";
import CardLists from "./components/CardLists";
import { robots } from "./robots";
import Searchbox from "./components/Searchbox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ``,
    };
  }

  onsearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    let { robots, searchField } = this.state;
    const filtedRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="text-center">
        <h1 className="text-6xl text-blue-500 font-bold">RoboFriends</h1>
        <Searchbox searchChange={this.onsearchChange}></Searchbox>
        <CardLists robots={filtedRobots}></CardLists>
      </div>
    );
  }
}

export default App;
