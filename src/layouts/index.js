import React, { Component } from "react"
import NavBar from "../components/navbar"
import injectSheet from "react-jss"
import IconBar from "../components/iconBar"
import { ContextProviderComponent } from "./context"
import { useMediaQuery } from "react-responsive"
import Helmet from "react-helmet"

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
      marginLeft: "0px",
      marginRight: "0px",
    },
    container: {
      marginTop: "60px",
    },
    footer: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  },
}
const Layout = ({ classes, children }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" })
  return (
    <ContextProviderComponent>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      <div className={classes.container}>
        <NavBar mode={isTabletOrMobile ? "mobile" : "desktop"} />
        <div className={classes.layout}>{children}</div>
      </div>
      <div className={classes.footer}>
        <p>Mariachi Jalisco de Carlos Daniel Paraguirre</p>
        <IconBar className={classes.iconBar} />
      </div>
    </ContextProviderComponent>
  )
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
