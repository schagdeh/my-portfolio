import React, { Component } from 'react'
import Logo from '../../component/Logo/Logo'
import './Navigation.css'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {

  render () {
    return (
      <div className='Navigation-body'>
        <div className='Logo-div'><Logo /></div>
        <div className='Logo-div'></div>
        <div className='Navigation-content'>
          <NavLink to='/'
                   exact
                   activeClassName='my-active'
                   activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline',
                                }}>Home</NavLink>
          <NavLink to='/project'
                   exact
                   activeClassName='my-active'
                   activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline',
                                }}>Project</NavLink>
          <NavLink to='/contact'
                   exact
                   activeClassName='my-active'
                   activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline',
                                }}>Contact</NavLink>
        </div>
      </div>
    )
  }

}

export default Navigation