import React, { Component } from 'react'
import axios from 'axios'
// Local imports
import VideoItem from './video/VideoItem'
import listCss from '../styles/videoList.scss'


export default class VideoList extends Component {
	constructor(props) {
		super(props)

		this.state = { moreVideos: 10 }
  }

	handleMoreVideos(moreVideos) {
		this.props.moreVideos(moreVideos);
	}

	render() {
		const videos = this.props.videos.map((video) => {
			return (
				<VideoItem
				videoSelect={this.props.videoSelect}
				key={video.etag}
				video={video}
				/>
			)
		})

		return (
			<div className="list">
				<div className="list__title">
					<h1>+ Vídeos</h1>
				</div>
				<div className="list__container">
					<ul>
						{videos}
					</ul>
					<span onClick={event => this.handleMoreVideos(this.state.moreVideos)} className="list__more">carregar mais vídeos...</span>
				</div>
			</div>
		)
	}
}
