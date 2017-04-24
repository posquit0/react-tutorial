import React, { Component } from 'react';


class VideoDetail extends Component {
  render() {
    const video = this.props.video;
    const { title, description } = video;

    return (
      <div className="video-detail">
        <div className="video-player">
        </div>
        <div className="video-information">
          <h3 className="video-title">{ title }</h3>
          <p className="video-description">{ description }</p>
      </div>
      </div>
    );
  }
}

export default VideoDetail;

