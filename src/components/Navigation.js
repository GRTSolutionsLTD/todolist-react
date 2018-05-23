import React from 'react'
import { Link } from 'react-router'
import TimerExample from '../containers/Timer'

const Navigation = ({ className, buttonClassName }) =>
  <nav className={className}>
    <Link className={buttonClassName} to="/">
      home
    </Link>
    <Link className={buttonClassName} to="todo"  >
      Todo
    </Link>
    <Link className={buttonClassName} to="weather">
      Show ALl
    </Link>
    <Link className={buttonClassName} to="Add">
      Add to do
    </Link>
    <TimerExample start={Date.now()} />
  </nav>

Navigation.defaultProps = {
  className: '',
  buttonClassName: 'c-button',
 
}

export default Navigation
