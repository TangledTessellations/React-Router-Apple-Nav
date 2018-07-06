import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import styled from 'styled-components';

// Fontawesome imports for apple logo 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    
  }
  render() {
    return (
      <div className="App">
        <NavWrapper />
      </div>
    );
  }
}

export default App;
