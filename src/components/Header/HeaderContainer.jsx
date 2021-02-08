import React from 'react';
import {connect} from 'react-redux';
import {Header} from "./Header";
import {bindActionCreators} from "redux";
import {getIsAuth} from "../../store/selectors/userSelectors";
import {tryLogoutActionCreator} from "../../store/actionCreators/userActionCreators";

function mapStateToProps(state) {
	return {
		isAuth: getIsAuth(state)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		logout: bindActionCreators(tryLogoutActionCreator, dispatch)
	};
}

const HeaderContainer = (props) => {
	return (
		<Header {...props} />
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderContainer);