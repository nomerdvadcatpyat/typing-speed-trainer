import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {App} from "./App.jsx";
import {bindActionCreators} from "redux";
import {getIsAuth} from "../../store/selectors/userSelectors";
import {getIsLoading} from "../../store/selectors/appSelectors";
import {setUserActionCreator} from "../../store/actionCreators/userActionCreators";
import {initSocket, setLoadedState, setLoadingState} from "../../store/actionCreators/appActionCreators";
import {auth} from "../../utils/api/authApi";
import PropTypes from "prop-types";
import {getRoomId} from "../../store/selectors/gameSelectors";


const AppContainer = (props) => {
		useEffect(() => {
			props.setLoadingState();
			auth()
				.then(json => {
					if(json.ok)
						props.setUser(json.user)
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
		isLoading: getIsLoading(state),
		roomId: getRoomId(state)
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		setLoadingState: bindActionCreators(setLoadingState, dispatch),
		setUser: bindActionCreators(setUserActionCreator, dispatch),
		setLoadedState: bindActionCreators(setLoadedState, dispatch),
		initSocket: bindActionCreators(initSocket, dispatch)
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);


AppContainer.propTypes = {
	isAuth: PropTypes.bool,
	isLoading: PropTypes.bool,
	setLoadingState: PropTypes.func,
	setUser: PropTypes.func,
	setLoadedState: PropTypes.func
}