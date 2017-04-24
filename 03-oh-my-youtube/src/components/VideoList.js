import React, { Component } from 'react';
import VideoListItem from './VideoListItem';


class VideoList extends Component {
  renderVideoListItem(video) {
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
