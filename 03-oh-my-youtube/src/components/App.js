import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import logo from '../logo.svg';
import './App.css';


const videos = [{
  id: 1,
  title: 'hello'
}, {
  id: 2,
  title: 'world'
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SearchBar />
        <VideoList videos={ videos } />
      </div>
    );
  }
}

export default App;
