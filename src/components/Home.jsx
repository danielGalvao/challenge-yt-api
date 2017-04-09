import React, { Component } from 'react'

import VideoHighlight from '../components/VideoHighlight'
import VideoList from '../components/VideoList'
import baseCss from '../styles/base.scss'
import YoutubeApi from '../components/youtube/YoutubeApi'

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      videos: [],
      selectedVideo: null
    };

    this.videoSearch(this.state.term)
  }

  videoSearch(term) {
    YoutubeApi({term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
		return (
      <div className="container">
        <VideoHighlight selectedVideo={this.state.selectedVideo} />
        <VideoList videos={ this.state.videos } />
      </div>
    )
  }
}
