import React from "react"
import { getPlaylistVideos } from "../functions/youtubeApi"
const { Provider, Consumer } = React.createContext(defaultContextValue)
const defaultContextValue = {
  data: {
    // set your initial data shape here
    videos: [],
  },
  set: () => {},
}
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
