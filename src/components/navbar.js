import React, { Component } from "react"
import injectSheet from "react-jss"
import { Link } from "gatsby"
import headerImage from "../img/logo.png"
import hearerImageHorizontal from "../img/logo-horizontal.png"
import IconBar from "./iconBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Helmet from "react-helmet"
import Media from "react-media"

import { faBars } from "@fortawesome/free-solid-svg-icons"
import classnames from "classnames"

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
    alignItems: "center",
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
    paddingBottom: "7px",
    borderBottom: "solid #a0a0a0 thin",
  },
  header: {
    borderBottom: "solid #a0a0a0 thin",
    marginBottom: "20px",
  },
  iconBar: {
    marginLeft: "20px",
    marginRight: "20px",
  },
  topBar: {
    position: "fixed",
    height: "50px",
    top: 0,
    left: 0,
    width: "100%",
    background: "black",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    paddingRight: "20px",
    paddingLeft: "20px",
  },
  slideIn: {
    animation: "slide-in 0.5s forwards",
  },
  navbarSide: {
    width: "200px",
    left: "0px",
    top: "0px",
    height: "100vh",
    transform: "translate3d(-200px, 0, 0)",
    transition: "transform .7s cubic-bezier(0, .52, 0, 1)",
  },
  navBarOpen: {
    transform: "translate3d(0, 0, 0)",
  },
  hidden: {
    display: "None",
  },
  closeButton: {
    position: "fixed",
    right: "20px",
    top: "20px",
  },
  bars: {
    marginRight: "10px",
  },
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
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }
  renderContent = ({ contentClass, logo }) => {
    const { classes } = this.props
    return (
      <div className={contentClass} onClick={() => this.close()}>
        <div className={classes.header}>
          <img src={logo} className={classes.headerImage} />
          <IconBar className={classes.iconBar} />
        </div>

        <div className={classes.navLinks}>
          {pages.map(page => (
            <Link
              key={page.title}
              className={classes.navItem}
              to={page.path}
            >
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    )
  }
  close = () => this.setState({ open: false })
  render() {
    const { classes } = this.props
    const { open } = this.state
    return (
      <Media query={{ maxWidth: 768 }}>
        {matches => {
          const topBarClass = matches && !open ? classes.topBar : classes.hidden
          const contentClass = matches & !open ? classes.hidden : ""
          const logo = matches ? hearerImageHorizontal : headerImage
          const navClass = matches
            ? classnames(
                classes.navbar,
                classes.navbarSide,
                open && classes.navBarOpen
              )
            : classes.navbar
          return (
            <div>
              <div className={topBarClass}>
                <FontAwesomeIcon
                  icon={faBars}
                  onClick={() => this.setState({ open: true })}
                  className={classes.bars}
                />
                <div>Mariachi Jalisco CD</div>
              </div>
              <div className={navClass}>
                <Helmet>
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                  />
                </Helmet>
                {this.renderContent({
                  //contentClass,
                  //closeButtonClass,
                  logo,
                })}
              </div>
            </div>
          )
        }}
      </Media>
    )
  }
}

export default injectSheet(styles)(NavBar)
