import React from "react"
import { graphql, Link } from "gatsby"

import injectSheet from "react-jss"

const styles = {
  fullscreen: {
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  logo: {
    display: "flex",
    maxWidth: "calc(100% - 20px)",
  },
  container: {},
  layout: {
    margin: `3rem auto`,
    maxWidth: 650,
    padding: `0 1rem`,
  },
  button: {
    fontSize: "30px",
  },
  activeStyle: {
    background: "white",
    color: "green",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: '90%'
  },
}

const main = ({ data, classes }) => {
  return (
    <div className={classes.fullscreen}>
      <div className={classes.content}>
        <img
          src="https://mariachijaliscocd.com/images/logo.png"
          className={classes.logo}
        />
        <Link
          to="/about"
          className={classes.button}
          activeClassName={classes.activeStyle}
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default injectSheet(styles)(main)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
