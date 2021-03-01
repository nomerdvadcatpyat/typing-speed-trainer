import React from 'react';
import {connect} from 'react-redux';
import {Header} from "./Header";
import {bindActionCreators} from "redux";
import {getIsAuth, getUser} from "../../store/selectors/userSelectors";
import {logoutActionCreator} from "../../store/actionCreators/userActionCreators";
import {logout as logoutApi} from "../../utils/api/authApi";
import PropTypes from "prop-types";

const HeaderContainer = (props) => {
	const logout = async () => {
		await logoutApi();
		props.logoutActionCreate();
	}

	return (
		<Header {...props} onLogout={logout} />
	);
}

function mapStateToProps(state) {
	return {
		isAuth: getIsAuth(state),
		user: getUser(state)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		logoutActionCreate: bindActionCreators(logoutActionCreator, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderContainer);


HeaderContainer.propTypes = {
	isAuth: PropTypes.bool,
	logoutActionCreate: PropTypes.func
}