import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { push } from 'react-router-redux';
import { createGenerateClassName } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';

import { store } from '../store';

import Home from '../pages/Home';
import { APP_LOAD, REDIRECT } from '../actionTypes';

const mapStateToProps = state => {
	return {
		appLoaded: state.common.appLoaded,
		redirectTo: state.common.redirectTo,
		currentUser: state.common.currentUser
	};
};

const mapDispatchToProps = dispatch => ({
	onLoad: (payload, token) =>
		dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
	onRedirect: () => dispatch({ type: REDIRECT })
});

const generateClassName = createGenerateClassName({
	dangerouslyUseGlobalCSS: true,
	productionPrefix: 'c'
});

class App extends Component {
	componentWillReceiveProps(nextProps) {
		// Setup to support auto redirecting on e.g. already autheticated user
		if (nextProps.redirectTo) {
			store.dispatch(push(nextProps.redirectTo));
			this.props.onRedirect();
		}
	}

	render() {
		return (
			<JssProvider generateClassName={generateClassName}>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</JssProvider>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
