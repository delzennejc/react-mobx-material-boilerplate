import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'mobx-react'

import rootRoutes from './routes'
import stores from './stores'

// Needed for onTouchTap
injectTapEventPlugin()

ReactDOM.render(
	<Provider {...stores}>
		<Router history={browserHistory}>
			{rootRoutes}
		</Router>
	</Provider>,
  document.getElementById('app')
)

