import React from 'react';
import './AudioPlayer.scss';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.playerRef = React.createRef();
  }
  render() {
    return (
      <div className="audio-bar">
        <div className="grey-background">
          <audio ref={this.playerRef} src={this.props.src} controls autoPlay />
        </div>
      </div>
    );
  }
}

export default AudioPlayer;