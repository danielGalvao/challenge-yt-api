import React, { Component } from 'react'
import YoutubeApi from '../components/youtube/YoutubeApi'

// Local imports
import VideoItem from './video/VideoItem'
import listCss from '../styles/videoList.scss'
import allVideos from '../styles/allvideos.scss'

export default class AllVideos extends Component {
	constructor(props) {
    super(props);

    this.state = {
      term: '',
      videos: [],
			totalVideos: 20
    };

    this.videoSearch(this.state.term, this.state.totalVideos)
  }

  videoSearch(term, totalVideos) {
    YoutubeApi({term: term, maxResults: totalVideos}, (videos) => {
      this.setState({
        videos: videos
      })
    })
  }

	loadVideos(moreVideos) {
    var newTotal = Number(this.state.totalVideos) + Number(moreVideos);
    this.setState({totalVideos: newTotal});
    this.videoSearch(this.state.term, newTotal);
  }

	render() {
		const videoItems = this.state.videos.map((video) => {
			return (
				<VideoItem
				onVideoSelect=''
				video={video}
				/>
			)
		})

		return (
			<div className="container_allvideos">
				<div className="container_allvideos__title">
					<h1>Todos os vídeos do Canal</h1>
				</div>
				<div className="allvideos">
					<ul>
						{videoItems}
					</ul>
					<span onClick={event => this.loadVideos(this.state.totalVideos)} className="allvideos__more">carregar mais vídeos...</span>
				</div>
			</div>
		)
	}
}
