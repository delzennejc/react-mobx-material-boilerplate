/**
 * Main Component
 * Main is the Layout of the application
 */

import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {observer} from 'mobx-react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {deepOrange500} from 'material-ui/styles/colors'
// import DevTools from 'mobx-react-devtools';

@observer
class Main extends Component {
	getTheme () {
		return getMuiTheme({
			palette: {
				accent1Color: deepOrange500
			}
		})
	}
	render () {
		return (
			<MuiThemeProvider muiTheme={this.getTheme()}>
				{/* <DevTools /> */}
				{this.props.children}
			</MuiThemeProvider>
		)
	}
}

export default Main
