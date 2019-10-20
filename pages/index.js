import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";

class Index extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("comp. did mount");
  }

  componentDidUpdate() {
    console.log("component update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    console.log("render");
    return (
      <BaseLayout>
        <h1>INDEX page</h1>
      </BaseLayout>
    );
  }
}

export default Index;
