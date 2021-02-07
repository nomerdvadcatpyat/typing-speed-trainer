import React from 'react';
import {connect} from 'react-redux';
import {App} from "./App.jsx";
import {bindActionCreators} from "redux";
import {getIsAuth} from "../../store/selectors/userSelectors";
import {getIsLoading} from "../../store/selectors/appSelectors";
import {tryAuthActionCreator} from "../../store/actionCreators/userActionCreators";


const AppContainer = (props) => {
		return (
			<App {...props} />
		);
}

const mapStateToProps = (state) => {
	return {
		isAuth: getIsAuth(state),
		isLoading: getIsLoading(state)
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		auth: bindActionCreators(tryAuthActionCreator, dispatch)
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);