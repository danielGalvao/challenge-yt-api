import React, { Component } from 'react'
import YoutubeApi from '../components/youtube/YoutubeApi'

// Local imports
import VideoItem from './video/VideoItem'
import listCss from '../styles/videoList.scss'

export default class AllVideos extends Component {
	constructor(props) {
    super(props);

    this.state = {
      term: '',
      videos: [],
    };

    this.videoSearch(this.state.term)
  }

  videoSearch(term) {
    YoutubeApi({term: term, maxResults: 20}, (videos) => {
      this.setState({
        videos: videos
      })
    })
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
			<div className="container">
				<h1>Todos os vídeos</h1>
				<ul>
					{videoItems}
				</ul>
			</div>
		)
	}
}
