import axios from "axios"
import _ from 'lodash'
export async function getPlaylistVideos(playlistId: string) {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/playlistItems",
    {
      params: {
        part: "snippet",
        maxResults: 24,
        type: "video",
        playlistId: "PLwcYW-oF48znlB4lsyqRlBKSnr9TeMcd8",
        key: "AIzaSyC315zDWamEZQbRx22kUs11ExFXINrvdMI",
      },
    }
  )
  const videos = response.data.items.map((video: any) => {
    const snippet = video.snippet
    const normalizedSnippet = {..._.omit(snippet, ['resourceId']), ...snippet.resourceId}
    const normalized = {..._.omit(video, ['snippet']), ...normalizedSnippet}
    return normalized
  })
  return videos
}