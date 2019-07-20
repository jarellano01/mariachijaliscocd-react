import React from "react"
import { LayoutBody } from "../layouts"
import injectSheet from "react-jss"
import ImageGrid from "../components/imageGrid"
import ContextConsumer from "../layouts/context"

import {
  Card,
  CardContent,
  CardSection,
  ContentHeader,
  ContentBody,
} from "../components/card"

const styles = {
}

const Main = () => {
  return (
    <LayoutBody>
      <Card>
        <CardContent>
          <CardSection>
            <ContentHeader>
              <h1 className="Title">Gallery</h1>
            </ContentHeader>
            <ContentBody>
              <ContextConsumer>
                {data => <ImageGrid videos={data.videos} />}
              </ContextConsumer>
            </ContentBody>
          </CardSection>
        </CardContent>
      </Card>
    </LayoutBody>
  )
}

export default injectSheet(styles)(Main)
