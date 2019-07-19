import React, { Component } from "react"
import injectSheet from "react-jss"
import { Link } from "gatsby"
import headerImage from '../img/logo-horizontal.png'

const styles = {
  navbar: {
    top: 0,
    position: "fixed",
    width: "100%",
    height: "30px",
    paddingTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  navLinks: {
    display: "flex",
    marginRight: "10px",
  },
  navItem: {
    paddingLeft: "15px",
  },
  navTitle: {
    marginLeft: "10px",
  },
  headerImage: {
      height: '100%'
  }
}

const pages = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/gallery',
        title: 'gallery'
    },
    {
        path: '/contact',
        title: 'Contact'
    },
]
class NavBar extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.navbar}>
        <img src={headerImage} className={classes.headerImage} />
        <div className={classes.navLinks}>
            {
                pages.map((page) => (
                    <Link key={page.title} className={classes.navItem} to={page.path}>{page.title}</Link>
                ))
            }
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(NavBar)
