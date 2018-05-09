import React, { Component } from 'react'
import Link from 'gatsby-link'

class Navbar extends Component {
  state = {
    burger: false,
  }
  get burgerClass() {
    if (this.state.burger) {
      return 'navbar-burger is-active'
    } else {
      return 'navbar-burger'
    }
  }
  get menuClass() {
    if (this.state.burger) {
      return 'navbar-menu is-active'
    } else {
      return 'navbar-menu'
    }
  }

  toggleBurger = () => {
    this.setState({
      burger: !this.state.burger,
    })
  }
  closeBurger = () => {
    this.setState({
      burger: false,
    })
  }
  render() {
    return (
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <span>Python Training</span>
            </Link>
            <div className={this.burgerClass} onClick={this.toggleBurger}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
          </div>
          <div className={this.menuClass} onClick={this.closeBurger}>
            <div className="navbar-end is-primary">
              <Link className="navbar-item" to="/resource">
                <span>资源</span>
              </Link>
              <Link className="navbar-item" to="/vimeo">
                <span>视频</span>
              </Link>
              <Link className="navbar-item" to="/changelog">
                <span>变更履历</span>
              </Link>
              {/* <Link className="navbar-item" to="/gitalk">
                <span>我想留言</span>
              </Link> */}
              <a
                className="navbar-item"
                href="https://python-blog.netlify.com/"
                target="_blank"
              >
                <span>博客</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
