import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from '../main/app'
import Home from '../components/Home'
import AllVideos from '../components/AllVideos'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/videos(/:q)" component={AllVideos} />
	</Route>
)
