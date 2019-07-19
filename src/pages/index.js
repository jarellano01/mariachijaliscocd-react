import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import injectSheet from "react-jss"

const styles = {
  fullscreen: {
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: 'column'
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
      fontSize: '30px',
  },
  activeStyle: {
      background: 'white',
      color: 'green'
  }
}

const main = ({ data, classes }) => {
  return (
    <div className={classes.fullscreen}>
      <img
        src="https://mariachijaliscocd.com/images/logo.png"
        className={classes.logo}
      />
      <Link 
        to='/about' 
        className={classes.button}
        activeClassName={classes.activeStyle}
      >
      Learn More
      </Link>
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
