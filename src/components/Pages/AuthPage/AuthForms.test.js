import {LoginForm} from "./LoginComponent/LoginForm";
import {mount} from "enzyme";
import {loginSchema} from "../../../utils/validators/authValidation";
import {FormikProvider, useFormik} from "formik";
import {BrowserRouter} from "react-router-dom";
import {RegistrationForm} from "./RegistrationComponent/RegistrationForm";


let handleSubmit;
beforeEach(() => {
	handleSubmit = jest.fn();
});


const FormWithFormik = ({InnerForm, values}) => {
	const formik = useFormik({
		initialValues: values,
		onSubmit: handleSubmit,
		validationSchema: loginSchema
	});

	return (
		<FormikProvider value={formik}>
			<BrowserRouter>
				<InnerForm
					handleSubmit={handleSubmit}
					handleChange={formik.handleChange}
					handleBlur={formik.handleBlur}
					touched={formik.touched}
					errors={formik.errors}
					values={values}
					status={formik.status}
					isSubmitting={formik.isSubmitting}
				/>
			</BrowserRouter>
		</FormikProvider>
	);
}



const correctLoginValues = {
	email: "test@test.com",
	password: "111"
}

const incorrectLoginEmail = {
	email: "testest.com",
	password: "111"
}

describe('<LoginForm />', () => {

	it('should be mounted', () => {
		const loginForm = mount(<FormWithFormik InnerForm={LoginForm} values={correctLoginValues}/>);

		expect(loginForm).toMatchSnapshot();
	});


	it('submit button should be active', () => {
		const loginForm = mount(<FormWithFormik InnerForm={LoginForm} values={correctLoginValues}/>);

		expect(loginForm.find('.auth-form__submit[disabled=""]').length).toBe(0);
	});


	it('form should be submitted', () => {
		const loginForm = mount(<FormWithFormik InnerForm={LoginForm} values={correctLoginValues}/>);
		loginForm.find('.auth-form').simulate('submit');

		expect(handleSubmit).toHaveBeenCalledTimes(1);
	});


	it('submit button should be disabled', () => {
		const loginForm = mount(<FormWithFormik InnerForm={LoginForm} values={incorrectLoginEmail}/>);

		expect(loginForm.find('.auth-form__submit[disabled]').length).toBe(1);
	});

});




const correctRegistrationValues = {
	email: "test@test.com",
	password: "111",
	rePassword: "111"
}

describe('<RegistrationForm />', () => {

	it('should be mounted', () => {
		const registerForm = mount(<FormWithFormik InnerForm={RegistrationForm} values={correctRegistrationValues}/>);

		expect(registerForm).toMatchSnapshot();
	});


	it('submit button should be active', () => {
		const registerForm = mount(<FormWithFormik InnerForm={RegistrationForm} values={correctRegistrationValues}/>);

		expect(registerForm.find('.auth-form__submit[disabled=""]').length).toBe(0);
	});


	it('form should be submitted', () => {
		const registerForm = mount(<FormWithFormik InnerForm={RegistrationForm} values={correctRegistrationValues}/>);
		registerForm.find('.auth-form').simulate('submit');

		expect(handleSubmit).toHaveBeenCalledTimes(1);
	});


	it('submit button should be disabled. Incorrect Email.', () => {
		const incorrectRegistrationEmail = {
			email: "testest.com",
			password: "111",
			rePassword: "111"
		}
		const registerForm = mount(<FormWithFormik InnerForm={RegistrationForm} values={incorrectRegistrationEmail}/>);

		expect(registerForm.find('.auth-form__submit[disabled]').length).toBe(1);
	});

	it('submit button should be disabled. Incorrect Password Confirmation.', () => {
		const incorrectRegistrationPasswordConfirmation = {
			email: "testest@asd.com",
			password: "111",
			rePassword: "11321"
		}
		const registerForm = mount(<FormWithFormik InnerForm={RegistrationForm}
		                                        values={incorrectRegistrationPasswordConfirmation}/>);

		expect(registerForm.find('.auth-form__submit[disabled]').length).toBe(1);
	});

	it('submit button should be disabled. Too short password.', () => {
		const incorrectRegistrationShortPassword = {
			email: "testest@asd.com",
			password: "1",
			rePassword: "1"
		}
		const registerForm = mount(<FormWithFormik InnerForm={RegistrationForm}
		                                        values={incorrectRegistrationShortPassword}/>);

		expect(registerForm.find('.auth-form__submit[disabled]').length).toBe(1);
	});

});






