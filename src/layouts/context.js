import React from "react"
import { getPlaylistVideos } from "../functions/youtubeApi"
const defaultContextValue = {
  data: {
    // set your initial data shape here
    videos: [],
  },
  set: () => {},
}

const { Provider, Consumer } = React.createContext(defaultContextValue)
class ContextProviderComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      ...defaultContextValue,
      videos: [],
    }
  }
  componentWillMount() {
    getPlaylistVideos().then(data => {
      this.setState({ videos: data })
    })
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as default, ContextProviderComponent }
