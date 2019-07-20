import React from "react"
import { graphql } from "gatsby"
import { LayoutBody } from "../layouts"
import injectSheet from "react-jss"
import IconBar from "../components/iconBar"

import {
  Card,
  CardContent,
  CardSection,
  ContentHeader,
  ContentBody,
} from "../components/card"

const styles = {
  leftContent: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
  },
  contentImage: {
    width: "100%",
    maxWidth: "250",
  },
  iconBar: {
    width: "200px",
    fontSize: "24px",
  },
  iconContainer: {
    justifyContent: "center",
    display: "flex",
  },
  body: {
    marginLeft: "25px",
    textAlign: "center",
  },
}

const main = ({ data, classes }) => {
  const description = data.site.siteMetadata.description
  return (
    <LayoutBody>
      <Card>
        <CardContent>
          <CardSection>
            <ContentHeader>
              <h1 className="Title">Contact</h1>
            </ContentHeader>
            <ContentBody className={classes.body}>
              <h3>
                Call Us:
                <br />
                <a href="tel:+18183239392">818-297-6743</a>(Ask for Carlos)
              </h3>
              <h3>
                Email Us: <br />
                <a href="mailto:mariachijaliscomd@gmail.com">
                  mariachijaliscomd@gmail.com
                </a>
              </h3>
              <div className={classes.iconContainer}>
                <IconBar className={classes.iconBar} />
              </div>
            </ContentBody>
          </CardSection>
        </CardContent>
      </Card>
    </LayoutBody>
  )
}

export default injectSheet(styles)(main)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
