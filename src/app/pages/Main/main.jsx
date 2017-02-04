/**
 * Main Component
 * Main is the Layout of the application
 */

import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {deepOrange500} from 'material-ui/styles/colors'
// import DevTools from 'mobx-react-devtools';

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
	}
})

@inject('storeX')
@observer
class Main extends Component {
	render () {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				{/* <DevTools /> */}
				{this.props.children}
			</MuiThemeProvider>
		)
	}
}

export default Main
