import React, { Component } from 'react';
import './VideoListItem.css'


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
        <div className="information">
          <h3 className="title">{ title }</h3>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
