import React, { Component } from 'react'
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
					<a className="header__search" title="Pesquisar"><i className="header__search-icon fa fa-search"></i></a>
					<a className="header__menu" title="Menu">Menu <i className="header__menu-icon fa fa-bars"></i></a>
				</div>
			</header>
		)
	}
}
