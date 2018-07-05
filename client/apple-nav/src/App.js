import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import styled from 'styled-components';

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
