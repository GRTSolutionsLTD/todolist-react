import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Weather from './pages/Weather'
import Add from './pages/Add'
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="todo" component={Todo} />
    <Route path="weather" component={Weather} />
    <Route path="Add" component={Add} />
  </Route>
)

export default routes
