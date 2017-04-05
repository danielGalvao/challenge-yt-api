import React, { Component } from 'react'
// Local imports
import listCss from '../styles/videoList.scss'
import videoCss from '../styles/video.scss'

export default class VideoHighlight extends Component {
	render() {
		return (
			<div className="list">
				<div className="list__title">
					<h1>+ Vídeos</h1>
				</div>
        <div className="list__container">
          <ul>
						<li className="video">
							<img className="video__image" />
							<p className="video__title">Conheça o MAPA de carreiras do VAGAS.com testando reticencias</p>
							<span className="video__views">
								<i className="video__views-icon fa fa-eye"></i>10 views
							</span>
						</li>
						<li className="video">
							<img className="video__image" />
							<p className="video__title">Conheça o MAPA de carreiras do VAGAS.com testando reticencias</p>
							<span className="video__views">
								<i className="video__views-icon fa fa-eye"></i>5k views
							</span>
						</li>
						<li className="video">
							<img className="video__image" />
							<p className="video__title">Conheça o MAPA de carreiras do VAGAS.com testando reticencias</p>
							<span className="video__views">
								<i className="video__views-icon fa fa-eye"></i>1k views
							</span>
						</li>
						<li className="video">
							<img className="video__image" />
							<p className="video__title">Conheça o MAPA de carreiras do VAGAS.com</p>
							<span className="video__views">
								<i className="video__views-icon fa fa-eye"></i>100 views
							</span>
						</li>
          </ul>
					<span className="list__more">carregar mais vídeos...</span>
        </div>
			</div>
		)
	}
}
