import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import game from './game'
import loading from './loading'
import pagination from './pagination'
import seats from './seats'
import formPopup from './formPopup'
import infoPopup from './infoPopup'

export default combineReducers({
	game,
	loading,
	pagination,
	seats,
	formPopup,
	infoPopup,
	form: formReducer
})
