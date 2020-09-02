import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Webcards from './webcards';
import Progcards from './progcards';
import Draweritem from './draweritem';

export const ConfigureStore =() => {
	const store = createStore(
		combineReducers({
			webcards : Webcards,
			progcards : Progcards,
			draweritem : Draweritem

		}),
		applyMiddleware(thunk,logger)
		);
	return store;
}