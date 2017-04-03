import React from 'react'
//import Loading from '../Loading'

const VideoDetail = () => {
  /*if (!video) {
    return <Loading />
  }*/

  const video = {
    id: { videoId: 'BXECkuYVB2s'},
    snippet: {
      title: 'Título de teste do vídeo',
      description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.'
    }
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div>
      <div className="highlight__video">
        <iframe width="560" height="310" src={url} frameborder="0" allowfullscreen></iframe>
      </div>
      <div className="highlight__desc">
        <span className="highlight__desc__title">{video.snippet.title}</span>
        <p className="highlight__desc__text">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
