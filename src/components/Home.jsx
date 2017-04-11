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
      selectedVideo: null,
      totalVideos: 4,
    };

    this.videoSearch(this.state.term, this.state.totalVideos)
  }

  videoSearch(term, totalVideos) {
    YoutubeApi({term: term, maxResults: totalVideos}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  loadVideos(moreVideos) {
    var newTotal = Number(this.state.totalVideos) + Number(moreVideos);
    newTotal = newTotal > 50 ? 50 : newTotal
    this.setState({totalVideos: newTotal})
    this.videoSearch(this.state.term, newTotal)
  }

  render() {
		return (
      <div className="container">
        <VideoHighlight selectedVideo={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          videoSelect={selectedVideo => this.setState({selectedVideo})}
          moreVideos={moreVideos => this.loadVideos(moreVideos)}
        />
      </div>
    )
  }
}
