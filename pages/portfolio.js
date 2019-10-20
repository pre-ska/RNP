import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import axios from "axios";
import BasePage from "../components/BasePage";

class Portfolio extends Component {
  static async getInitialProps({ query }) {
    let portfolio = {};
    const portfolioId = query.id;
    {
      /* query je ono iza ? (upitnika u adresi) */
    }

    try {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/posts/${portfolioId}`
      );

      portfolio = response.data;
    } catch (err) {
      console.log(err);
    }
    return { portfolio };
  }

  render() {
    const {
      portfolio: { title, body, id }
    } = this.props;
    return (
      <BaseLayout>
        <BasePage>
          <p>I'm portfolio page</p>

          <h2>{title}</h2>
          <p>{body}</p>
          <p>{id}</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
