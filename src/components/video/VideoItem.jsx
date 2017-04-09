import React, { Component } from 'react'
import axios from 'axios'
// Local imports
import * as YT from '../youtube/YoutubeVars'
import videoCss from '../../styles/video.scss'

export default class VideoItem extends Component {
	constructor(props) {
    super(props)
		this.state = {
			videoView: 0
		}
		this.handleViews = this.handleViews.bind(this)
		this.handleFormatViews = this.handleFormatViews.bind(this)

		this.handleViews(this.props.video.id.videoId)
	}

	handleViews(videoId){
		 axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${YT.API_KEY}`)
		 	.then(resp => {
		 		this.setState({videoView: this.handleFormatViews(resp.data.items[0].statistics.viewCount)})
		 })
	}

	handleFormatViews(views) {
		let viewsNumb = Number(views)
		let viewFormat = viewsNumb
		if(viewsNumb >= 1000 && viewsNumb < 1000000) {
			viewFormat = Math.round(viewsNumb/1000)+'k';
		} else if(viewsNumb >= 1000000) {
			viewFormat = Math.round(viewsNumb/1000000)+'m';
		}
		return viewFormat
	}

	render() {

		return (
			<li className="video" onClick={() => this.props.onVideoSelect(this.props.video)}>
			<img src={this.props.video.snippet.thumbnails.medium.url} className="video__image" />
			<p title={this.props.video.snippet.title} className="video__title">{this.props.video.snippet.title}</p>
			<span className="video__views">
			<i className="video__views-icon fa fa-eye"></i>{this.state.videoView} views
			</span>
			</li>
		)
	}
}
