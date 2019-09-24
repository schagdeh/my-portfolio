import React, { Component } from 'react'
import { Card } from 'antd'
import BurgerLogo from '../../assets/images/burger-logo.png'
import ReduxLogo from '../../assets/images/Redux.png'

class Project extends Component {

  render () {
    const {Meta} = Card
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Card
          hoverable
          cover={<img src={BurgerLogo} alt="logo"/>}
          style={{maxWidth: '320px'}}><Meta title='Burger Builder' description='https://github.com/schagdeh/burger-builder' /></Card>
        <Card
          hoverable
          cover={<img src={ReduxLogo} alt="logo"/>}
          style={{maxWidth: '320px'}}><Meta title='Redux' /></Card>
        <Card
          hoverable
          cover={<img src={ReduxLogo} alt="logo"/>}
          style={{maxWidth: '320px'}}><Meta title='Redux Advance' /></Card>
        <Card
          hoverable
          cover={<img src={ReduxLogo} alt="logo"/>}
          style={{maxWidth: '320px'}}><Meta title='Planify' /></Card>
      </div>
    )
  }

}

export default Project