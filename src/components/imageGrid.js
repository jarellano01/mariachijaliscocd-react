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
    gridAutoRows: "auto",
    gridGap: "15px",
  },
  gridItem: {
      position: 'relative'
  },
  gridImage: {
    width: "100%",
  },
  gridImageTitle: {
      position: 'absolute',
      left: '0px',
      textAlign: 'center',
      bottom: '0px',
      width: '100%',
      background: '#bb6e21',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: "37px",
  },
  "@media (min-width: 500px)": {
    grid: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },

  "@media (min-width: 700px)": {
    grid: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  "@media (min-width: 1000px)": {
    grid: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
}

const ImageModal = ({video, classes}) => {
  const [isOpen, setIsOpen] = useState(false)
  const videoId = video.snippet.resourceId.videoId
  const closeModal = () => setIsOpen(false)
  return (
    <div key={videoId} className={classes.gridItem}>
      <img
        onClick={() => {
          setIsOpen(true)
        }}
        alt="gridImage"
        className={classes.gridImage}
        src={video.snippet.thumbnails.high.url}
      />
      <div className={classes.gridImageTitle}>{video.snippet.title}</div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={closeModal}
      />
    </div>
  )
}
const ImageGridUS = ({ classes, videos }) => {
    console.log(videos)
  return (
    <div className={classes.grid}>
      {videos.map(video => {
        return <ImageModal 
            video={video}
            classes={classes}
            key={video.id}
        />
      })}
    </div>
  )
}
export default injectSheet(styles)(ImageGridUS)
