import React, { PureComponent } from 'react'

import loaderGif from '../../assets/images/loader.gif'

export default class Loader extends PureComponent {
	render() {
		return (
			<section className="loader">
				<img
					src={loaderGif}
					className="loader__image"
					alt="Carregando..."
					title="Carregando..." />
			</section>
		)
	}
}
