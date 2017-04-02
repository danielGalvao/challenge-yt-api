import React from 'react'

import Header from '../components/Header'
import VideoHighlight from '../components/VideoHighlight'
import VideoList from '../components/VideoList'
import baseCss from '../styles/base.scss'

export default props => (
  <main>
    <Header />
    <div className="container">
      <VideoHighlight />
      <VideoList />
    </div>
  </main>
)
