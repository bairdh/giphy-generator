import React, { Component } from 'react';
import Search from '../Search/Search';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <HashRouter>
          <Route exact path="/" component={Search}></Route>
          <Route path="/favorite" component={Favorite}></Route>
          
        </HashRouter>
      </div>
    );
  }
  
}

export default App;
