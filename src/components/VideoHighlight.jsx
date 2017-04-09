import React, { Component } from 'react'
// Local imports
import highlightCss from '../styles/videoHighlight.scss'
import VideoDetail from './video/VideoDetail'

export default class VideoHighlight extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="highlight">
				<div className="highlight__title">
					<h1>Vídeo em destaque</h1>
				</div>
        <VideoDetail selectedVideo={this.props.selectedVideo} />
			</div>
		)
	}
}
