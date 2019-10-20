import React, { Component } from "react";
import Link from "next/link";
import "../../styles/main.scss";

class Header extends Component {
  render() {
    const title = this.props.title;
    return (
      <>
        <p>{title}</p>
        {this.props.children}
        <p className="aaaaa">I'm styled p element</p>
        <p className="aaaaa">I'm styled p element</p>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/portfolios">
          <a>Portfolios</a>
        </Link>

        <Link href="/blogs">
          <a>Blogs</a>
        </Link>

        <Link href="/cv">
          <a>Cv</a>
        </Link>
      </>
    );
  }
}

export default Header;
