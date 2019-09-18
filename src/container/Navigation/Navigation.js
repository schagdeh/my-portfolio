import React, { Component } from 'react'
import Logo from '../../component/Logo/Logo'
import './Navigation.css'

class Navigation extends Component {

  render () {
    return (
      <div className='Navigation-body'>
        <div className='Logo-div'><Logo /></div>
        <div className='Navigation-content'>
          <div>Home</div>
          <div>Project</div>
          <div>About me</div>
          <div>Contact</div>
        </div>
      </div>
    )
  }

}

export default Navigation