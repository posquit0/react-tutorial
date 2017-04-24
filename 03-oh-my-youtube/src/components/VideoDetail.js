import React, { Component } from 'react';


class VideoDetail extends Component {
  renderNotFound() {
    return (
      <div>No Videos</div>
    );
  }

  render() {
    const video = this.props.video;

    if (!video)
      return this.renderNotFound();

    const { videoId } = video.id;
    const { title, description } = video.snippet;

    return (
      <div className="video-detail">
        <div className="video-player">
          { videoId }
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

