import React, { useState } from "react"
import injectSheet from "react-jss"
import { Link } from "gatsby"
import headerImage from "../img/logo.png"
import hearerImageHorizontal from "../img/logo-horizontal.png"
import IconBar from "./iconBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "react-responsive"

import { faBars } from "@fortawesome/free-solid-svg-icons"
import classnames from "classnames"

const styles = {
  navbar: {
    position: "fixed",
    paddingTop: "10px",
    paddingBottom: "10px",
    display: "flex",
    flexDirection: "column",
    background: "black",
    left: "50px",
    width: "200px",
  },
  navBarOpen: {
    transform: "translate3d(0, 0, 0) !important",
  },
  navbarFloating: {
    left: "50px",
    width: "200px",
  },
  navbarSide: {
    width: "200px",
    left: "0px",
    top: "0px",
    height: "100vh",
    transform: "translate3d(-200px, 0, 0)",
    transition: "transform .7s cubic-bezier(0, .52, 0, 1)",
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
    display: 'None',
    position: "fixed",
    height: "50px",
    top: 0,
    left: 0,
    width: "100%",
    background: "black",
    alignItems: "center",
    boxSizing: "border-box",
    paddingRight: "20px",
    paddingLeft: "20px",
  },
  slideIn: {
    animation: "slide-in 0.5s forwards",
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
  "@media (max-width: 768px)": {
    topBar: {
        display: 'flex'
    },
    navbar: {
      width: "200px",
      left: "0px",
      top: "0px",
      height: "100vh",
      transform: "translate3d(-200px, 0, 0)",
      transition: "transform .7s cubic-bezier(0, .52, 0, 1)",
    },
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
const renderContent = ({ contentClass, logo, classes }) => {
  return (
    <div className={contentClass}>
      <div className={classes.header}>
        <img alt="headerImage" src={logo} className={classes.headerImage} />
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
const NavBar = ({ classes, mode }) => {
  console.log(mode)
  const isTabletOrMobile = mode == "mobile"
  const [open, setOpen] = useState(false)

  const topBarClass = !open ? classes.topBar : classes.hidden
  const logo = isTabletOrMobile ? hearerImageHorizontal : headerImage
  const navClass = classnames(classes.navbar, open ? classes.navBarOpen : undefined)
  return (
    <div>
      <div className={topBarClass}>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setOpen(true)}
          className={classes.bars}
        />
        <div>Mariachi Jalisco CD</div>
      </div>
      <div className={navClass} onClick={() => setOpen(false)}>
        {renderContent({
          classes,
          logo,
        })}
      </div>
    </div>
  )
}

export default injectSheet(styles)(NavBar)
