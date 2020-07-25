import React from 'react';
import './App.scss';
import speakersArray from '../../util/speakersData.json'
import Header from '../Header/Header'
import ShareList from '../ShareList/ShareList'
import AudioPlayer from '../AudioPlayer/AudioPlayer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { speakersArray: speakersArray, audioSrc: '', year: '2020' }
    this.changeAudio = this.changeAudio.bind(this)
    this.changeYear = this.changeYear.bind(this)
  }
  changeAudio(href) {
    this.setState({ audioSrc: href })
  }
  changeYear(year) {
    this.setState({ year: year })
  }
  render() {
    return (
      <div>
        <Header year={this.state.year} changeYear={this.changeYear} />
        <ShareList speakersArray={this.state.speakersArray} changeAudio={this.changeAudio} year={this.state.year} />
        <AudioPlayer src={this.state.audioSrc} />
      </div>
    );
  }
}

export default App;