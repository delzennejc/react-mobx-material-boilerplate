import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Main from './pages/Main'
import Home from './pages/Home'

export default (
	<Route path='/' component={Main}>
		<IndexRoute component={Home} />
	</Route>
)
