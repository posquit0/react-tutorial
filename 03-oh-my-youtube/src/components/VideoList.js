import React, { Component } from 'react';
import VideoListItem from './VideoListItem';
import './VideoList.css';


class VideoList extends Component {
  renderVideoListItem(video) {
    console.log(video);
    return (
      <VideoListItem
        key={ video.id.videoId }
        video={ video }
        onVideoSelect={ this.props.onVideoSelect } />
    );
  }

  render() {
    const videos = this.props.videos;

    return (
      <ul className="video-list">
        { videos.map((video) => this.renderVideoListItem(video)) }
      </ul>
    );
  }
}

export default VideoList;
