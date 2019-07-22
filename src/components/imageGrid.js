import React, { useState } from "react"
import injectSheet from "react-jss"
import ModalVideo from "react-modal-video"
import "../styles/modal.scss"

const styles = {
  contentImage: {
    width: "100%",
    maxWidth: "250",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridAutoRows: 'auto',
    gridGap: "15px",
  },
  gridImage: {
    width: "100%",
  },
  '@media (min-width: 500px)': {
      grid: {
          gridTemplateColumns: "repeat(2, 1fr)"
      }
  },

  '@media (min-width: 700px)': {
      grid: {
          gridTemplateColumns: "repeat(2, 1fr)"
      }
  },
  '@media (min-width: 1000px)': {
      grid: {
          gridTemplateColumns: "repeat(3, 1fr)"
      }
  },
}

const ImageGridUS = ({ classes, videos }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={classes.grid}>
      {videos.map(video => (
        <div key={video.id} className={classes.gridItem}>
         <img
            onClick={() => {
              setIsOpen(true)
            }}
            alt='gridImage'
            className={classes.gridImage}
            src={video.snippet.thumbnails.high.url}
          />
            <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId={video.snippet.resourceId.videoId}
                onClose={() => setIsOpen(false)}
            />
        </div>
      ))}
    </div>
  )
}
export default injectSheet(styles)(ImageGridUS)
