import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import ParticlesBg from 'particles-bg'
ReactDOM.render(
  <Router> 
    <App /> 
    <ParticlesBg type="cobweb" bg={true} />
  </Router>,
  document.getElementById('root')
)