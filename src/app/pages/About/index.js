/**
 * Home Component
 * Index of the application
 */

import {observer, inject} from 'mobx-react'
import About from './about'

export default inject('storeX')(observer(About))
