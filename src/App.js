import React from 'react';
import './App.css';
import Home from './component/Home/Home'
import Project from './component/Project/Project'
import Contact from './component/Contact/Contact'
import { BrowserRouter, Route } from 'react-router-dom'
import Navigation from './container/Navigation/Navigation'
import { Divider } from 'antd'


function App() {
  return (
    <BrowserRouter className='App-body'>
      <Navigation />
      <Divider dashed />
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/project' component={Project}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <div style={{position: 'fixed', bottom: '14px', background: 'black', opacity: '.7', width: '95%', color: 'white'}}>footer</div>
    </BrowserRouter>
  );
}

export default App;
