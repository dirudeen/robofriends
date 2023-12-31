import React, { Component } from "react";
import "../styles/App.css";
import CardLists from "../components/CardLists";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ``,
    };
  }

  componentDidMount() {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((respones) => {
          return respones.json();
        })
        .then((Users) => {
          return !Users.length ? (
            <h2>Loading</h2>
          ) : (
            this.setState({ robots: Users })
          );
        });
    } catch (error) {
      console.error(error);
    }
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
        <h1 className=" m-4 text-6xl text-blue-500 font-bold">RoboFriends</h1>
        <Searchbox searchChange={this.onsearchChange}></Searchbox>
        <Scroll>
          <ErrorBoundary>
            <CardLists robots={filtedRobots}></CardLists>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
