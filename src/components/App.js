import React from 'react'
import Header from './Header'

const App = ({ children }) =>
  <div>
    <Header />
    <div className="c-todo">
      {children}
    </div>
  </div>

export default App
