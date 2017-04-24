import React, { Component } from 'react';
import searchYoutube from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import logo from '../logo.svg';
import './App.css';


const YOUTUBE_API_KEY = 'AIzaSyAXAgSCHclQLTB7ZfzAPyrIH1a8A4lT8-I';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  searchVideos(query) {
    const options = { key: YOUTUBE_API_KEY, term: query };
    searchYoutube(options, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SearchBar onQueryChange={ query => this.searchVideos(query) } />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          videos={ this.state.videos }
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) } />
      </div>
    );
  }
}

export default App;
