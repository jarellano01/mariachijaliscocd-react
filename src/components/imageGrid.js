import React from "react"
import injectSheet from "react-jss"
import YouTube from '@u-wave/react-youtube'

const styles = {
  contentImage: {
    width: "100%",
    maxWidth: "250",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 16vw)",
    gridGap: "15px",
  },
  gridImage: {
    width: "100%",
  },
}

const ImageGridUS = ({ classes, videos }) => {
    console.log(videos)
  return (
    <div className={classes.grid}>
      {videos.map(video => (
        <div key={video.id} className={classes.gridItem}>
            {/* <YouTube
              videoId={video.id}
              className={classes.gridImage}
              modestBranding={true}
            /> */}
          <img
            className={classes.gridImage}
            src={video.snippet.thumbnails.high.url}
          />
        </div>
      ))}
    </div>
  )
}
export default injectSheet(styles)(ImageGridUS)
