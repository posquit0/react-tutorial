import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import logo from '../logo.svg';
import './App.css';


const videos = [{
  id: 1,
  title: 'hello',
  description: 'world'
}, {
  id: 2,
  title: 'PoApper 2017',
  description: 'React Seminar'
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
        <VideoDetail video={ videos[0] } />
        <VideoList videos={ videos } />
      </div>
    );
  }
}

export default App;
