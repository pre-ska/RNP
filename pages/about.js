import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class About extends Component {
  render() {
    return (
      <BaseLayout>
        <BasePage className="about-page">
          <p>I'm about page</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
