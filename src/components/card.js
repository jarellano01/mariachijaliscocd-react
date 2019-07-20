import React from "react"
import injectSheet from "react-jss"

const styles = {
  cardContainer: {
    backgroundColor: "hsla(0,0%,66.3%,.62)",
    marginBottom: '50px',
    maxWidth: '800px',
    width: '100%'
  },
  contentContainer: {
    display: "flex",
    paddingBottom: "20px",
  },
  section: {
    padding: "10px",
    width: '100%'
  },
  contentImage: {
    width: "100%",
    maxWidth: "250",
  },
  contentHeader: {
    display: "flex",
    justifyContent: "center",
  },
  contentBody: {}
}

const CardUS = ({ classes, children, ...props }) => {
  return (
    <div className={classes.cardContainer} {...props} >
        {children}
    </div>
  )
}
export const Card = injectSheet(styles)(CardUS)

const CardContentUS = ({ classes, children, ...props }) => {
  return (
    <div className={classes.contentContainer} {...props}>
        {children}
    </div>
  )
}
export const CardContent = injectSheet(styles)(CardContentUS)


const CardSectionUS = ({ classes, children, ...props }) => {
  return (
    <div className={classes.section} {...props}>
        {children}
    </div>
  )
}
export const CardSection = injectSheet(styles)(CardSectionUS)


const ContentHeaderUS = ({ classes, children, ...props }) => {
  return (
    <div className={classes.contentHeader} {...props}>
        {children}
    </div>
  )
}
export const ContentHeader = injectSheet(styles)(ContentHeaderUS)

const ContentBodyUS = ({ classes, children, ...props }) => {
  return (
    <div className={classes.contentBody} {...props}>
        {children}
    </div>
  )
}
export const ContentBody = injectSheet(styles)(ContentBodyUS)