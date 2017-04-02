import React, { Component, PropTypes } from 'react'
// Local imports
import headerStyle from '../styles/header.scss'
import logoHeader from '../assets/images/logo.png'

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header__content">
					<div className="header__brand">
						<img src={logoHeader} alt="Fictícia Vídeos" title="Fictícia Vídeos" className="header__logo" />
					</div>
					<a className="header__menu" title="Menu">Menu <i className="header__menu-icon fa fa-bars fa-2"></i></a>
				</div>
			</header>
		)
	}
}
