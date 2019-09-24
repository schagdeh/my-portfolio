import React, { Component } from 'react'

class Home extends Component {

  render () {
    return (
      <div className='body-body'>
        <div style={{margin: '4% 20%'}}>
          <h1>
            Hello, my name is Phuntsok. I am a Front End Web Developer living in Neuchâtel.
          </h1>
        </div>
        <h2 style={{textAlign: 'center', textDecoration: 'underline'}}>About Me</h2>
        <h3 style={{height: '200px', margin: '0 15%'}}>
          “My name is Phuntsok and I am a front end web developer from Neuchâtel.
          I live with my two wonderful children and my wonderful wife.
          I graduated in 2018 with a 3month coding course from the Powercoders Academy, Lausanne.
          I served my first years at a small IT company,
          but have since learning new programming language and improving my existing skills and looking for apprenticeship.”.
        </h3>
      </div>
    )
  }

}

export default Home