import React from "react"
import { graphql } from "gatsby"
import Layout, { LayoutBody } from "../components/layout"
import nl2br from "react-nl2br"
import injectSheet from "react-jss"
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
}

const main = ({ data, classes }) => {
  const description = data.site.siteMetadata.description
  return (
    <Layout>
      <Card>
        <LayoutBody>
          <CardContent>
            <CardSection className={classes.leftContent}>
              <img
                className={classes.contentImage}
                src="https://mariachijaliscocd.com/images/about_photo.jpg"
              />
            </CardSection>
            <CardSection>
              <ContentHeader>
                <h1 className="Title">Our Story</h1>
              </ContentHeader>
              <ContentBody>{nl2br(description)}</ContentBody>
            </CardSection>
          </CardContent>
        </LayoutBody>
      </Card>
    </Layout>
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
