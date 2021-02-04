import React from 'react';
import {connect} from 'react-redux';
import {App} from "./App.jsx";
import {bindActionCreators} from "redux";
import {auth} from "../../store/actions/auth";


const AppContainer = (props) => {
		return (
			<App {...props} />
		);
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.user.isAuth,
		isLoading: state.app.isLoading
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		auth: bindActionCreators(auth, dispatch)
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);