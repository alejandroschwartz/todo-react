import React from 'react'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Icon } from './Icon'
import '../styles/Icon.css'
import '../styles/TodoItem.css'

export default function TodoItem(props) {
  return (
    <div className='TodoItem' key={props.id} >
        <span className={props.completed ? 'TodoItem__icon TodoItem__icon--completed' : 'TodoItem__icon' } > 
          <Icon css='icon' icon={faCheck} /> 
        </span>
        <p className={props.completed ? 'TodoItem__text TodoItem__text--completed' : 'TodoItem__text' } >
          {props.text}
        </p>
        <span className='TodoItem__icon' > 
          <Icon css='icon' icon={faXmark} />
        </span>
    </div>
  )
}
