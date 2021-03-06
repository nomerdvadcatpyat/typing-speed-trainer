import {connect} from 'react-redux';
import {RegistrationForm} from "./RegistrationForm";
import {bindActionCreators, compose} from "redux";
import {setUser} from "../../../../store/actionCreators/userActionCreators";
import {registration} from "../../../../utils/api/authApi";
import {Redirect} from "react-router-dom";

import {withFormik} from "formik";
import {registrationSchema} from "../../../../utils/validators/authValidation";


const RegistrationContainer = (props) => {
	return props.status && props.status.success ? (<Redirect to="/" />) : (
		<RegistrationForm {...props} />
	);
}

const mapDispatchToProps = dispatch => {
	return {
		setUser: bindActionCreators(setUser, dispatch)
	};
}

async function handleSubmit(values, { props, setErrors, setStatus }) {
	try {
		const data = await registration(values);
		setStatus({ success: true});
		props.setUser(data);
	} catch (e) {
		setErrors({ all: e.response.data.error });
	}
}


export default compose(
	connect(null, mapDispatchToProps),
	withFormik({
		mapPropsToValues: () => ({
			login: "",
			password: "",
			rePassword: ""
		}),
		handleSubmit,
		validationSchema: registrationSchema
	})
)(RegistrationContainer);