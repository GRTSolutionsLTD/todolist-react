import React from 'react'
import Navigation from './Navigation'
import logo from '../images/logo.svg'


const Header = props =>
  <div className="c-header">
    <img src={logo} className="c-header__logo" alt="create-react-redux-app-logo" />
    <h2>Welcome to Racheli & Meirav project</h2>
    <Navigation />
  </div>

export default Header
