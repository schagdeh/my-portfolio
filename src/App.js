import React from 'react';
import './App.css';
import Navigation from './container/Navigation/Navigation'
import Body from './container/Body/Body'
import { Divider } from 'antd'

function App() {
  return (
    <div className='App-body'>
      <Navigation />
      <Divider dashed />
      <Body />
      <div>footer</div>
    </div>
  );
}

export default App;
