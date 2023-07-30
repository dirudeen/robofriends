import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <h1>Oppps something gone wrong</h1>;
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
