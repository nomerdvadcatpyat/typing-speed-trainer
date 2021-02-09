import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {App} from "./App.jsx";
import {bindActionCreators} from "redux";
import {getIsAuth} from "../../store/selectors/userSelectors";
import {getIsLoading} from "../../store/selectors/appSelectors";
import {setUserActionCreator} from "../../store/actionCreators/userActionCreators";
import {setLoadedState, setLoadingState} from "../../store/actionCreators/appActionCreators";
import {auth} from "../../utils/api/authApi";


const AppContainer = (props) => {

		useEffect(() => {
			props.setLoadingState();
			auth()
				.then(user => {
					props.setUser(user);
				})
				.catch(console.log)
				.finally(props.setLoadedState)
		}, []);

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
		setLoadingState: bindActionCreators(setLoadingState, dispatch),
		setUser: bindActionCreators(setUserActionCreator, dispatch),
		setLoadedState: bindActionCreators(setLoadedState, dispatch)
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);