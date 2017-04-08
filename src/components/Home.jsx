import React from 'react'

import VideoHighlight from '../components/VideoHighlight'
import VideoList from '../components/VideoList'
import baseCss from '../styles/base.scss'

export default props => (
  <div className="container">
    <VideoHighlight />
    <VideoList />
  </div>
)
