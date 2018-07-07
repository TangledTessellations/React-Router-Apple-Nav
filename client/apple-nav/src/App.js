import React from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import { Route } from 'react-router-dom';
import SubNav from './components/SubNav';

// Fontawesome imports for apple logo 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faClipboard } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faSearch, faClipboard);

const App = () => {
    return (
      <div className="App">
        <Route path="/" component={NavWrapper} />
        <Route path="/:name" component={SubNav}/>
      </div>
    );
  }


export default App;
