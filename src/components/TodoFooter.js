import React from 'react'
import FilterLink from '../containers/FilterLink'

const TodoFooter = () =>
  <p>
    Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">not done</FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">done</FilterLink>
  </p>

export default TodoFooter
