import React, { Component } from 'react'
// Local imports
import listCss from '../styles/videoList.scss'

export default class VideoHighlight extends Component {
	render() {
		return (
			<div className="list">
				<div className="list__title">
					<h1>+ Vídeos</h1>
				</div>
        <div className="list__container">
          <ul>
						<li>Video1</li>
						<li>Video2</li>
						<li>Video3</li>
						<li>Video4</li>
          </ul>
					<span className="list__more">carregar mais vídeos</span>
        </div>
			</div>
		)
	}
}
