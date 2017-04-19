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
			term: props.params.q || '',
			videos: [],
			totalVideos: 20
		};

		this.videoSearch(this.state.term, this.state.totalVideos)
	}

	componentWillReceiveProps(props) {
		if (props.params.q !== this.props.params.q)
			this.videoSearch(props.params.q, this.state.totalVideos)
	}

	videoSearch(term, totalVideos) {
		YoutubeApi({term: term, maxResults: totalVideos}, (videos) => {
			this.setState({
				videos: videos
			})
		})
	}

	loadVideos(moreVideos) {
		var newTotal = Number(this.state.totalVideos) + Number(moreVideos)
		newTotal = newTotal > 50 ? 50 : newTotal
		this.setState({totalVideos: newTotal})
		this.videoSearch(this.state.term, newTotal)
	}

	render() {
		const videosLength = this.state.videos.length
		let loadMore = videosLength < 20 || videosLength == 50 ? "allvideos__more disable" : "allvideos__more"
		let titleVideos = !this.props.params.q ? "Todos os vídeos do Canal" : `Resultados para: "${this.props.params.q}"`
		const videoItems = this.state.videos.map((video) => {
			return (
				<VideoItem
				onVideoSelect=''
				key={video.etag}
				video={video}
				/>
			)
		})

		return (
			<div className="container_allvideos">
				<div className="container_allvideos__title">
					<h1>{titleVideos}</h1>
				</div>
				<div className="allvideos">
					<ul>
						{videoItems}
					</ul>
					<span onClick={event => this.loadVideos(this.state.totalVideos)} className={loadMore}>carregar mais vídeos...</span>
				</div>
			</div>
		)
	}
}
