import React, { Component } from 'react'
// Local imports
import headerStyle from '../styles/header.scss'
import menuStyle from '../styles/menu.scss'
import logoHeader from '../assets/images/logo.png'

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header__content">
					<div className="header__brand">
						<img src={logoHeader} alt="Fictícia Vídeos" title="Fictícia Vídeos" className="header__logo" />
					</div>
					<div className="header__search" title="Pesquisar">
						<input type="text" className="header__search-input" />
						<i className="header__search-icon fa fa-search"></i>
					</div>
					<div className="header__menu" title="Menu">Menu
						<i className="header__menu-icon fa fa-bars"></i>
					</div>
					<ul className="menu">
						<li className="menu__item">
							<i className="menu__item-icon fa fa-star-o"></i>
							Destaques
						</li>
						<li className="menu__item">
							<i className="menu__item-icon fa fa-toggle-right"></i>
							Vídeos
						</li>
					</ul>
				</div>
			</header>
		)
	}
}
