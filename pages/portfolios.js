import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
// import Link from "next/link";
import { Link } from "../routes";
import axios from "axios";

class Portfolios extends Component {
  static async getInitialProps() {
    let posts = [];

    try {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data;
    } catch (err) {
      console.log(err);
    }

    return { posts: posts.splice(0, 10) };
  }

  renderPosts(posts) {
    return posts.map(post => (
      <li key={post.id}>
        <Link route={`/portfolio/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <BaseLayout>
        <p>I'm PORTFOLIO page</p>
        <ul>{this.renderPosts(this.props.posts)}</ul>
      </BaseLayout>
    );
  }
}

export default Portfolios;
