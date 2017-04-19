import React, { Component } from 'react'
import { hashHistory, Link } from 'react-router'
// Local imports
import headerStyle from '../styles/header.scss'
import menuStyle from '../styles/menu.scss'
import logoHeader from '../assets/images/logo.png'

export default class Header extends Component {
	constructor(props){
		super(props);
		this.toggleSearchBar = this.toggleSearchBar.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.state = {
			activeSearch: false,
			query: ''
		};
	}

	handleSearch(query) {
		this.setState( { query : query } )
		hashHistory.push(`/videos/${query}`)
	}

	toggleSearchBar() {
		const currentState = this.state.activeSearch
		this.setState( { activeSearch : !currentState } )
	}

	render() {
		let classNameSearch = this.state.activeSearch ? 'header__search active' : 'header__search'
		let classNameSearchIcon = this.state.activeSearch ? "header__search-icon fa fa-close" : "header__search-icon fa fa-search"

		return (
			<header className="header">
				<div className="header__content">
					<div className="header__brand">
						<Link to='/'>
							<img src={logoHeader} alt="Fictícia Vídeos" title="Fictícia Vídeos" className="header__logo" />
						</Link>
					</div>
					<form className={classNameSearch} title="Pesquisar" onSubmit={event => this.handleSearch(event.target.q.value)} >
						<input type="text" name="q" className="header__search-input" />
						<i className={classNameSearchIcon} onClick={this.toggleSearchBar}></i>
					</form>
					<div className="header__menu" title="Menu">Menu
						<i className="header__menu-icon fa fa-bars"></i>
					</div>
					<ul className="menu">
						<li className="menu__item">
							<Link to='/'>
								<i className="menu__item-icon fa fa-star-o"></i>
								Destaques
							</Link>
						</li>
						<li className="menu__item">
							<Link to='/videos'>
								<i className="menu__item-icon fa fa-toggle-right"></i>
								Vídeos
							</Link>
						</li>
					</ul>
				</div>
			</header>
		)
	}
}
