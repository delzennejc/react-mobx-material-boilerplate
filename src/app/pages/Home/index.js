/**
 * Home Component
 * Index of the application
 */

import {observer, inject} from 'mobx-react'
import Home from './home.jsx'

export default inject('storeX')(observer(Home))
