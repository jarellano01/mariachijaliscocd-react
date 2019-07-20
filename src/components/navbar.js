import React, { Component } from "react"
import injectSheet from "react-jss"
import { Link } from "gatsby"
import headerImage from "../img/logo.png"
import IconBar from './iconBar'

const styles = {
  navbar: {
    left: "50px",
    position: "fixed",
    width: "200px",
    paddingTop: "10px",
    paddingBottom: "10px",
    display: "flex",
    flexDirection: "column",
    background: "black",
  },
  navLinks: {
    display: "flex",
    marginRight: "10px",
    flexDirection: "column",
    alignItems: 'center',
  },
  navItem: {
    paddingLeft: "15px",
    marginBottom: "20px",
  },
  navTitle: {
    marginLeft: "10px",
    marginBottom: "20px",
  },
  headerImage: {
    width: "100%",
    paddingBottom: '7px',
    borderBottom: 'solid #a0a0a0 thin',
  },
  header: {
    borderBottom: 'solid #a0a0a0 thin',
    marginBottom: '20px',
  },
  iconBar: {
      marginLeft: '20px',
      marginRight: '20px',
  }
}

const pages = [
  {
    path: "/",
    title: "About",
  },
  {
    path: "/gallery",
    title: "Gallery",
  },
  {
    path: "/contact",
    title: "Contact",
  },
]
class NavBar extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.navbar}>
        <div className={classes.header}>
            <img src={headerImage} className={classes.headerImage} />
            <IconBar className={classes.iconBar} />
        </div>

        <div className={classes.navLinks}>
          {pages.map(page => (
            <Link key={page.title} className={classes.navItem} to={page.path}>
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(NavBar)
