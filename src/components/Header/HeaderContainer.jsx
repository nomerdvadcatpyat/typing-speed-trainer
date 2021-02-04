import React from 'react';
import {connect} from 'react-redux';
import {Header} from "./Header";
import {bindActionCreators} from "redux";
import {logout} from "../../store/actions/auth";

function mapStateToProps(state) {
	return {
		isAuth: state.user.isAuth
	};
}

function mapDispatchToProps(dispatch) {
	return {
		logout: bindActionCreators(logout, dispatch)
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