import React, { Component } from "react"
import NavBar from "../components/navbar"
import injectSheet from "react-jss"
import IconBar from "../components/iconBar"
import { ContextProviderComponent } from "./context"

const styles = {
  container: {
    marginTop: "20px",
    minHeight: "100vh",
  },
  body: {
    marginLeft: "269px",
    marginRight: "35px",
    margin: `auto`,
    padding: `0 1rem`,
    display: "flex",
    justifyContent: "center",
  },
  layout: {},
  footer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    padding: "0px 50px 0px 50px",
    background: "grey",
  },
  iconBar: {
    width: "187px",
    fontSize: "25px",
  },
  "@media (max-width: 768px)": {
      body: {
          marginLeft: '0px',
          marginRight: '0px'
      },
      container: {
          marginTop: '60px'
      }
  },
}
class Layout extends Component {
  render() {
    const { classes, children } = this.props
    return (
      <ContextProviderComponent>
        <div className={classes.container}>
          <NavBar />
          <div className={classes.layout}>{children}</div>
        </div>
        <div className={classes.footer}>
          <p>Mariachi Jalisco de Carlos Daniel Paraguirre</p>
          <div>
            <IconBar className={classes.iconBar} />
          </div>
        </div>
      </ContextProviderComponent>
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
