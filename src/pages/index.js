import React from "react"
import { graphql } from "gatsby"
import { LayoutBody } from "../layouts"
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
  description: {
      fontSize: '1.4em'
  }
}

const main = ({ data, classes }) => {
  const description = data.site.siteMetadata.description
  return (
    <LayoutBody>
      <Card>
        <CardContent>
          <CardSection>
            <img
              className={classes.contentImage}
              src="https://mariachijaliscocd.com/images/about_photo.jpg"
            />
            <ContentHeader>
              <h1 className="Title">About Us</h1>
            </ContentHeader>
            <ContentBody className={classes.description}>{nl2br(description)}</ContentBody>
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
