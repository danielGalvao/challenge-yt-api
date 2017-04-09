import React, { Component } from 'react'
import axios from 'axios'
// Local imports
import VideoItem from './video/VideoItem'
import listCss from '../styles/videoList.scss'


const VideoList = (props) => {

	const videoItems = props.videos.map((video) => {
		return (
			<VideoItem
				onVideoSelect={props.onVideoSelect}
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
					{videoItems}
        </ul>
				<span className="list__more">carregar mais vídeos...</span>
      </div>
		</div>
	)
}
export default VideoList
