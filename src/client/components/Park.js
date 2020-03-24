import React, { Component } from "react";

export default class Park extends Component {
  constructor() {
    super();
    this.state = {
      // your state here
    };
  }

  render() {
    console.log(
      "---------------------------------------------------------------",
      this.props
    );
    return <div></div>;
  }
}
