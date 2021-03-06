import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {App} from "./App.jsx";
import {bindActionCreators} from "redux";
import {getIsAuth} from "../../store/selectors/userSelectors";
import {setUser} from "../../store/actionCreators/userActionCreators";
import {auth} from "../../utils/api/authApi";

const AppContainer = (props) => {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		auth()
			.then(json => {
				if (json.ok)
					props.setUser(json.user)
			})
			.catch(console.log)
			.finally(() => setLoading(false))
	}, []);

	return (
		<App {...props} isLoading={isLoading} />
	);
}


const mapStateToProps = (state) => {
	return {
		isAuth: getIsAuth(state)
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUser: bindActionCreators(setUser, dispatch)
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);