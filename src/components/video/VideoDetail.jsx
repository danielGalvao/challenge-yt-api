import React from 'react'
// Local imports
import Loading from '../Loading'

const VideoDetail = ({selectedVideo}) =>  {
  if (!selectedVideo) {
		return (
      <div>
        <div className="highlight__video">
          <Loading />
        </div>
        <div className="highlight__desc">
          <Loading />
        </div>
      </div>
    )
	}

  const videoId = selectedVideo.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <div>
      <div className="highlight__video">
        <iframe width="560" height="310" src={url} frameborder="0" allowfullscreen></iframe>
      </div>
      <div className="highlight__desc">
        <span title={selectedVideo.snippet.title} className="highlight__desc__title">{selectedVideo.snippet.title}</span>
        <div className="highlight__desc__snippets">
          <i title="" className="highlight__desc__snippets-icon fa fa-eye"></i>
          <i data-views="data" className="highlight__desc__snippets-icon tooltip fa fa-clock-o"></i>
        </div>
        <p className="highlight__desc__text">{selectedVideo.snippet.description}</p>
      </div>
    </div>
  )
}
export default VideoDetail
