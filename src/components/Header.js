import React from 'react'
import logo from '../images/payaca-logo.png'

class Header extends React.Component {
  render() {
    return (
      <div className="logo-section">
        <div className="container">
          <img src={logo} alt="payaca-logo" />
        </div>
      </div>
    )
  }
}

export default Header
