import {observable} from 'mobx'

/**
 * Class responsible for routing and general UI state, which is mainly:
 * what element is currently selected?
 */
export class Store {
	@observable text = 'React + MobX + React Router + Material-UI + CSS Modules'
	@observable about = 'JavaScript is really Cool !'
}
