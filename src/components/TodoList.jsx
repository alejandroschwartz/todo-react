import React from 'react';
import '../styles/TodoList.css';

export default function TodoList(props) {
  return (
    <div >
        {props.children}
    </div>
  )
}
