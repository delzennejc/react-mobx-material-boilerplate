import express from 'express'
import path from 'path'
import compression from 'compression'
import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './src/app/routes'
import {Provider} from 'mobx-react'

injectTapEventPlugin()

import stores from './src/app/stores'

var app = express()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'build'), {index: false}))

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
	match({ routes, location: req.url }, (err, redirect, props) => {
		if (err) {
			res.status(500).send(err.message)
		} else if (redirect) {
			res.redirect(redirect.pathname + redirect.search)
		} else if (props) {
			const appHtml = renderToString(
				<Provider {...stores}>
					<RouterContext {...props} />
				</Provider>
			)
			res.send(renderPage(appHtml))
		} else {
			res.status(404).send('Not Found')
		}
	})
})

function renderPage (appHtml) {
	return `
	<!doctype html>
	<html class="no-js" lang="">

	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>React + Mobx Boilerplate</title>
		<meta name="description" content="React + Mobx Boilerplate">

		<!-- Use minimum-scale=1 to enable GPU rasterization -->
		<meta
			name="viewport"
			content="width=device-width, height=device-height, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
		>
		<link rel="stylesheet" type="text/css" href="main.css">
		<link rel="stylesheet" type="text/css" href="index.css">
	</head>

	<body>
		<div id="app">${appHtml}</div>

		<!-- This script adds the Roboto font to our project. For more detail go to this site:  http://www.google.com/fonts#UsePlace:use/Collection:Roboto:400,300,500 -->
		<script>
			var WebFontConfig = {
				google: { families: [ 'Roboto:400,300,500:latin' ] }
			};
			(function() {
				var wf = document.createElement('script');
				wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
				'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
				wf.type = 'text/javascript';
				wf.async = 'true';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(wf, s);
			})();
		</script>
		<script src="app.js"></script>
	</body>

	</html>
	`
}

const PORT = process.env.PORT || 7777
app.listen(PORT, function () {
	console.log('Production Express server running at localhost:' + PORT)
})
