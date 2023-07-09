import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import landingPage from './components/landingPage'
import BasicForm from '../src/components/BasicForm'
// import img from '../src/istockphoto-455302535-612x612.jpg';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route exact path='/' component={landingPage} />
      </Switch>
    </BrowserRouter>
    // <div>
    //   <img style={{ width: '100%', height: '100%' }} src={img} alt="" />
    // </div>
  );
}