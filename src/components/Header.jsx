import React, { Component, PropTypes } from 'react'
// Local imports
import headerStyle from '../styles/header.scss'

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header__content">
					<div className="header__brand">
						<img src="" alt="Fictícia Vídeos" title="Fictícia Vídeos" className="header__logo" />
					</div>
					<a className="header__menu fa fa-bars fa-2" title="Menu"></a>
				</div>
			</header>
		)
	}
}
