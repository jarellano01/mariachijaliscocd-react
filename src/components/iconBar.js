import React from "react"
import { Link } from "gatsby"
import injectSheet from "react-jss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Icons1 from "@fortawesome/free-brands-svg-icons"
import * as Icons2 from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'

const Icons = {...Icons1, ...Icons2}

const styles = {
    iconBar: {
        display: 'flex',
        justifyContent: "space-between",
        marginBottom: '10px',
        marginTop: '10px'
    }
}

const iconList = [
  {
    icon: "faFacebook",
    url: "https://www.facebook.com/MariachiJaliscoCD",
  },
  {
    icon: "faInstagram",
    url: "https://www.instagram.com/MARIACHIJALISCOCD/",
  },
  {
    icon: "faYoutube",
    url: "https://www.youtube.com/channel/UC28d4H2up7fyraE6go6QohQ",
  },
  {
    icon: "faPhone",
    url: "tel:+18183239392",
  },
]

const main = ({ classes, className }) => {
  return (
    <div className={classnames(classes.iconBar, className)}>
      {iconList.map(icon => (
        <a key={icon.icon} href={icon.url} target='_blank'>
          <FontAwesomeIcon icon={Icons[icon.icon]} />
        </a>
      ))}
    </div>
  )
}

export default injectSheet(styles)(main)
