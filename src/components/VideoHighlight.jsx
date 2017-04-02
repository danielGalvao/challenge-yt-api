import React, { Component, PropTypes } from 'react'

export default class VideoHighlight extends Component {
	render() {
		return (
			<div className="highlight">
				<div className="highlight__content">
					<div className="highlight__title">
						<h1>Vídeo em destaque</h1>
					</div>
          <div className="highlight__video">
            <iframe width="560" height="310" src="https://www.youtube.com/embed/BXECkuYVB2s" frameborder="0" allowfullscreen></iframe>
          </div>
          <div className="highlight__desc">
            <span className="highlight__desc__title">Título de teste do vídeo</span>
            <p className="highlight__desc__text">
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
              e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
              bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
              Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,
              permanecendo essencialmente inalterado.
            </p>
          </div>
				</div>
			</div>
		)
	}
}
