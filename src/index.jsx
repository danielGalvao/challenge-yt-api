import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
// Local imports
import resetCss from './styles/reset.scss'
import routes from './main/routes'

const Root = () => (
	<div>
		<Router history={hashHistory} routes={routes}/>
	</div>
)

ReactDOM.render(<Root />, document.getElementById('app'))
