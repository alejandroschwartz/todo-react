import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Icon.css'

export const Icon = ({ icon, css }) => {
  return <FontAwesomeIcon className={css} icon={icon} />
}