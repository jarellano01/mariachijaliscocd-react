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
    url: "",
  },
  {
    icon: "faInstagram",
    url: "",
  },
  {
    icon: "faYoutube",
    url: "",
  },
  {
    icon: "faPhone",
    url: "",
  },
]

const main = ({ classes, className }) => {
  return (
    <div className={classnames(classes.iconBar, className)}>
      {iconList.map(icon => (
        <Link key={icon.icon} to='/test'>
          <FontAwesomeIcon icon={Icons[icon.icon]} />
        </Link>
      ))}
    </div>
  )
}

export default injectSheet(styles)(main)
