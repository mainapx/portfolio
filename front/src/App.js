import logo from './logo.svg';
import './App.css';
import React from 'react';
import IndexPage from './container/index.js';
import {Handler} from './components/test/test.js';
import {NewText} from './components/test/test1.js';
import {BrowserRouter,Route} from 'react-router-dom';
import Test from './components/test/g.js';
import AdminComponent from './container/admin.js';
import {NewTesting} from './components/test/uu.js';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/test" component={Handler} />
        <Route exact path="/admin" component={AdminComponent} />
        <Route exact path="/test1" component={NewText} />
        <Route exact path="/uu" component={NewTesting} />
        <Route exact path="/h" component={Test} />

      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
