import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Fullscreen from "react-full-screen"

import injectSheet from "react-jss"

const styles = {
  fullscreen: {
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex'
  },
  container: {
  },
  layout: {
    margin: `3rem auto`,
    maxWidth: 650,
    padding: `0 1rem`,
  },
}

const main = ({ data, classes }) => {
  return (
    <Layout>
      <div
        className={classes.fullscreen}
      >
        <div className={classes.centermiddle}>
            This is fullscreen!
        </div>
      </div>
      <h1>Hello world!</h1>
      <div>{data.site.siteMetadata.title}</div>
    </Layout>
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
