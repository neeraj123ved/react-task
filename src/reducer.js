import auth from './reducers/auth';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	auth,
	common,
	router: routerReducer,
	form: formReducer
});
