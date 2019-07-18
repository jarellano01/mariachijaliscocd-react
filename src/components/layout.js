import React, { Component } from "react"
import injectSheet from "react-jss"

const styles = {
  container: {
      
  },
  layout: {
    margin: `auto`,
    maxWidth: 650,
    padding: `0 1rem`,
  },
}
class Layout extends Component {
  render() {
    const { classes, children } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.layout}>
          {children}
        </div>
      </div>
    )
  }
}

const StyledLayout = injectSheet(styles)(Layout)
export default StyledLayout
