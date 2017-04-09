import React, { PureComponent } from 'react'

export default class Loader extends PureComponent {
	render() {
		return (
			<section className="loader">
				<img
					src="http://www.tsf.pt/common/images/img_loader.gif"
					className="loader__image"
					alt="Carregando..."
					title="Carregando..." />
			</section>
		)
	}
}
