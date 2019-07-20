import axios from "axios"
export async function getPlaylistVideos(playlistId) {
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
  const videos = response.data.items.filter(video => {
    return video.snippet.title.toLowerCase() !== "private video"
  })
  return videos
}
