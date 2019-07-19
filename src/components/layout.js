import React, { Component } from "react"
import NavBar from "./navbar"
import injectSheet from "react-jss"

const styles = {
  container: {
    marginTop: "80px",
  },
  body: {
    maxWidth: 800,
    margin: `auto`,
    padding: `0 1rem`,
  },
  layout: {},
  footer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 10px 20px 10px"
  },
}
class Layout extends Component {
  render() {
    const { classes, children } = this.props
    return (
      <div className={classes.container}>
        <NavBar />
        <div className={classes.layout}>{children}</div>
        <div className={classes.footer}>
          <div>Mariachi Jalisco de Carlos Daniel</div>
          <div>818.292.9229</div>
          <div>mariachijalisco@gmail.com</div>
        </div>
      </div>
    )
  }
}

const StyledLayout = injectSheet(styles)(Layout)
export default StyledLayout

class Body extends Component {
  render() {
    const { classes, children } = this.props
    return <div className={classes.body}>{children}</div>
  }
}

export const LayoutBody = injectSheet(styles)(Body)
