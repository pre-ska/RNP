import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class Blogs extends Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <p>I'm Blogs page</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Blogs;
