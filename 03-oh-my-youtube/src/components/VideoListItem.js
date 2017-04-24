import React, { Component } from 'react';


class VideoListItem extends Component {
  render() {
    const { video, onVideoSelect } = this.props;
    const { title } = video.snippet;
    const thumbnail = video.snippet.thumbnails.default.url;

    return (
      <li className="video-list-item" onClick={ () => onVideoSelect(video) }>
        <span className="thumbnail">
          <img src={ thumbnail } alt={ title } />
        </span>
        <span className="title">{ title }</span>
      </li>
    );
  }
}

export default VideoListItem;
